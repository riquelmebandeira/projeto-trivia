import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import { Link } from 'react-router-dom';
import { NUMBER } from '../services/data';
import Header from '../components/Header';
import Button from '../components/Button';
import '../css/Feedback.css';
import Footer from '../components/Footer';

class Feedback extends Component {
  updateRanking({ name, score }, picture) {
    const ranking = JSON.parse(localStorage.getItem('ranking')) || [];
    const updatedRanking = [
      ...ranking,
      {
        name,
        score,
        picture,
      },
    ];
    localStorage.setItem('ranking', JSON.stringify(updatedRanking));
  }

  feedbackMessage() {
    const { player } = JSON.parse(localStorage.getItem('state'));
    const { score, assertions } = player;

    return (
      <p>
        Você acertou
        {' '}
        <span data-testid="feedback-total-question">{assertions}</span>
        {' '}
        questões.
        Um total de
        {' '}
        <span data-testid="feedback-total-score">{score}</span>
        {' '}
        pontos.
      </p>
    );
  }

  render() {
    const { player } = JSON.parse(localStorage.getItem('state'));
    const userHash = md5(player.gravatarEmail).toString();
    const imgLink = `https://www.gravatar.com/avatar/${userHash}`;
    const { score, assertions } = player;
    this.updateRanking(player, imgLink);

    const messages = {
      question: `Você acertou ${assertions} questões`,
      score: `Um total de ${score} pontos`,
      loss: 'Podia ser melhor...',
      great: 'Mandou bem!',
    };

    return (
      <>
        <Header player={ player.name } score={ score } src={ imgLink } />
        <main className="feedback__container">
          <section>
            <h2 data-testid="feedback-text">
              {assertions < NUMBER ? messages.loss : messages.great}
            </h2>
            <div className="feedback__text">{ this.feedbackMessage() }</div>

            <Link to="/ranking">
              <Button value="Ver Ranking" dataTestId="btn-ranking" />
            </Link>
            <Link to="/">
              <Button
                value="Jogar Novamente"
                className="btn-play-again"
                dataTestId="btn-play-again"
              />
            </Link>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Feedback;
