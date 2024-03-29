import React, { Component } from 'react';
import { decode } from 'html-entities';
import md5 from 'crypto-js/md5';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import Header from '../components/Header';
import Button from '../components/Button';
import getQuestions from '../services/requests';
import '../css/Game.css';
import Footer from '../components/Footer';

const correctAnswer = 'correct-answer';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: 0,
      questionsList: [],
      seconds: 30,
      disabled: false,
      classname: '',
      userResponse: false,
      redirect: false,
    };
    this.setQuestionsInState = this.setQuestionsInState.bind(this);
    this.handleNextBtn = this.handleNextBtn.bind(this);
    this.handleAlternative = this.handleAlternative.bind(this);
    this.resetSeconds = this.resetSeconds.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.createTimer = this.createTimer.bind(this);
    this.calculateScore = this.calculateScore.bind(this);
  }

  componentDidMount() {
    this.createTimer();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentQuestion } = this.state;
    const MIN_SECONDS = 1;
    if (prevState.seconds === MIN_SECONDS) {
      this.resetSeconds();
    }
    if (prevState.currentQuestion !== currentQuestion) {
      this.createTimer();
    }
  }

  async setQuestionsInState() {
    const { results } = await getQuestions();
    this.setState({
      questionsList: results,
    });
  }

  setScoreOnStorage(points) {
    const { player } = JSON.parse(localStorage.getItem('state'));
    const UPDATED_PLAYER_DATA = {
      player: {
        ...player, assertions: player.assertions + 1, score: player.score + points,
      },
    };
    localStorage.setItem('state', JSON.stringify(UPDATED_PLAYER_DATA));
  }

  calculateScore() {
    const { currentQuestion, questionsList, seconds } = this.state;
    const BASE_NUMBER = 10;
    const MAX_DIFFICULTY_VALUE = 3;
    const question = questionsList[currentQuestion];
    let difficulty;
    switch (question.difficulty) {
    case 'easy':
      difficulty = 1;
      break;
    case 'medium':
      difficulty = 2;
      break;
    case 'hard':
      difficulty = MAX_DIFFICULTY_VALUE;
      break;
    default:
      return null;
    }
    this.setScoreOnStorage(BASE_NUMBER + (seconds * difficulty));
  }

  treatAnswersData(questionInfo) {
    const CORRECT_ANSWER = {
      value: correctAnswer, alternative: questionInfo.correct_answer,
    };
    const WRONG_ANSWERS = questionInfo.incorrect_answers.map((alternative, index) => ({
      value: `wrong-answer-${index}`,
      alternative,
    }));
    const ALL_ANSWERS = [{ ...CORRECT_ANSWER }, ...WRONG_ANSWERS];
    return ALL_ANSWERS;
  }

  resetSeconds() {
    this.setState({
      seconds: 0,
      disabled: true,
      userResponse: true,
    });
    clearInterval(this.cronometerInterval);
  }

  shuffle(array) {
    const answers = array.map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    this.setState({
      isShuffled: true,
      answers,
    });
  }

  createTimer() {
    const ONE_SECOND = 1000;
    this.cronometerInterval = setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState.seconds - 1 }));
    }, ONE_SECOND);
  }

  handleNextBtn() {
    const { currentQuestion } = this.state;
    const MAX_CLICKS = 4;

    if (currentQuestion < MAX_CLICKS) {
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
        classname: '',
        userResponse: false,
        seconds: 30,
        disabled: false,
        isShuffled: false,
      }));
    } else if (currentQuestion === MAX_CLICKS) {
      this.setState({ redirect: true });
    }
  }

  handleAlternative({ target }) {
    const BUTTON_ID = target.getAttribute('data-testid');

    if (BUTTON_ID === 'correct-answer') {
      this.calculateScore();
    }

    this.setState({
      classname: 'answers-reveal',
      userResponse: true,
      disabled: true,
    });

    clearInterval(this.cronometerInterval);
  }

  renderTimer() {
    const { seconds } = this.state;
    return (
      <p>
        { `Tempo restante: ${seconds}` }
      </p>
    );
  }

  render() {
    const { player } = JSON.parse(localStorage.getItem('state'));
    const userHash = md5(player.gravatarEmail).toString();
    const { currentQuestion, questionsList, disabled,
      isShuffled, classname, userResponse, answers, redirect } = this.state;
    if (questionsList.length < 1) {
      this.setQuestionsInState();
      return (<Loading />);
    }
    const questionInfo = questionsList[currentQuestion];
    const treatedAnswers = this.treatAnswersData(questionInfo);
    if (!isShuffled) { this.shuffle(treatedAnswers); }
    return (
      <>
        { redirect && <Redirect to="/feedback" />}
        <Header player={ player.name } score={ player.score } src={ `https://www.gravatar.com/avatar/${userHash}` } />
        <main className="game__container">
          <div className={ classname }>
            <div className="game__headings">
              <h4 data-testid="question-category">{questionInfo.category}</h4>
              <p data-testid="question-text">{decode(questionInfo.question)}</p>
            </div>
            <div className="game__alternatives">
              { answers
              && (answers.map(({ value, alternative }, index) => (
                <Button
                  key={ index }
                  dataTestId={ value }
                  onClick={ this.handleAlternative }
                  disabled={ disabled }
                  value={ alternative }
                />
              ))) }
            </div>
            <div className="game__options">
              { this.renderTimer() }
              { userResponse && <Button
                dataTestId="btn-next"
                value="Next Question"
                className="next-question-btn"
                onClick={ this.handleNextBtn }
              /> }
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Game;
