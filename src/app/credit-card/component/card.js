import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import ReactCardFlip from 'react-card-flip';

export default function Card(props) {
    const {cardNumber, holderName, cardMonth, cardYear, cardType, isFlipped, cardCvv,
        focusedSection} = props;
    let [randomImg, setRandomImg] = useState(1);

    useEffect(()=>{
        setRandomImg(Math.floor(Math.random()*25) + 1)
    }, [])
    const hideNumber = (number) => {
        let numberSplit = number.split('');
        for (let index = 0; index < numberSplit.length; index++){
            if (index > 4 && index < 14) {
                if (numberSplit[index] !== ' ' && numberSplit[index] !== '#') {
                    numberSplit[index] = '*';
                }
            }
        }
        return numberSplit;
    };
    const hideCvv = (cvv) => {
        let numberSplit = cvv.split('');
        for (let index = 0; index < numberSplit.length; index++){
            numberSplit[index] = '*'
        }
        return numberSplit;
    };

    return (
        <div className="card-wrap">
            <ReactCardFlip isFlipped={isFlipped} flipDirection={"horizontal"}>
                <div className={["card"]}>
                    <div className="chip">
                        <img
                            src = {require('../../../assets/chip.png').default} />
                    </div>
                    <div className="card-type">
                        <img src={require(`../../../assets/${cardType}.png`).default} alt={''} />
                    </div>
                    <div className="fill">
                        <img src={require(`../../../assets/${randomImg}.jpeg`).default} alt=""/>
                    </div>
                    <div className={'content'}>
                        <div className={["number", focusedSection === 'number' ? 'active' : null].join(' ')}>
                            {cardNumber ? hideNumber(cardNumber).map((val, index) => ( val)) : '#### #### #### ####'}
                        </div>
                        <div className="owner-data">
                            <div className={["name",  focusedSection === 'name' ? 'active' : null].join(' ')}>
                                <div className="label">Card Holder </div>
                                <div className="value">{holderName ? holderName : 'FULL NAME'}</div>
                            </div>
                            <div className={["validity", focusedSection === 'validity' ? 'active' : null].join(' ')}>
                                <div className="label">Expires</div>
                                <div className="value">{cardMonth ? cardMonth : 'MM'}/{cardYear ? cardYear : 'YY'}</div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="card">
                    <div className="fill">
                        <img src={require(`../../../assets/${randomImg}.jpeg`).default} alt=""/>

                    </div>
                    <div className="black-line"/>
                    <div className="back-content">
                        <div className="cvv">
                            CVV
                        </div>
                        <div className={'cvv-band'}><span>{hideCvv(cardCvv)}</span></div>
                        <div className="cvv-cardType">
                            <img src={require(`../../../assets/${cardType}.png`).default} />
                        </div>

                    </div>
                </div>
            </ReactCardFlip>
        </div>
    )
}

Card.prototype = {
    cardNumber: PropTypes.string,
    holderName: PropTypes.string,
    cardMonth: PropTypes.number,
    cardYear: PropTypes.number,
    cardType: PropTypes.string,
    isFlipped: PropTypes.bool,
    cardCvv: PropTypes.number,
}