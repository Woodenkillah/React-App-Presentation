import musleImg from '../img/3.comp/1.page/2.organs/musle.png';
import betaImg from '../img/4.general/5.signs/beta.png';
import liverImg from '../img/3.comp/1.page/2.organs/liver.png';
import threeNum from '../img/4.general/5.signs/3.png';
import lipidImg from '../img/3.comp/2.page/2.organs/lipid.png';
import brainImg from '../img/3.comp/2.page/2.organs/brain.png';
import kidneyImg from '../img/3.comp/2.page/2.organs/kidney.png';
import twoNum from '../img/4.general/5.signs/2.png';
import gutsImg from '../img/3.comp/3.page/2.organs/guts.png';
import infectionImg from '../img/3.comp/3.page/2.organs/infection.png';
import stomachImg from '../img/3.comp/3.page/2.organs/stomach.png';

export const ROUND_POINT_SETS = {
  AIM: {
    containerStyles: {
      width: `56px`,
      height: `56px`,
      top: `37%`,
      left: `58%`,
      transform: `translate(-58%, -37%)`
    },
    textStyles: {
      top: `20px`,
      left: `65px`
    },
    text: `Цель по HbA1c`
  },
  HYPO: {
    containerStyles: {
      width: `28px`,
      height: `28px`,
      top: `58%`,
      left: `27.5%`,
      transform: `translate(-27.5%, -58%)`
    },
    textStyles: {
      top: `-33px`,
      left: `-50px`
    },
    text: `Гипогликемия`
  },
  COMP: {
    containerStyles: {
      width: `18px`,
      height: `18px`,
      top: `71.5%`,
      left: `47.5%`,
      transform: `translate(-47.5%, -71.5%)`
    },
    textStyles: {
      top: `-33px`,
      left: `-110px`
    },
    text: `Осложнения СД`
  },
  RISKS: {
    containerStyles: {
      width: `18px`,
      height: `18px`,
      top: `69%`,
      left: `81.5%`,
      transform: `translate(-81.5%, -69%)`
    },
    textStyles: {
      top: `-33px`,
      left: `-32px`
    },
    text: `СС риски`
  },
};

export const ROUND_PIC_SETS = {
  SET_1988: [
    {
      imgSrc: `${musleImg}`,
      imgStyle: {
        position: `absolute`,
        width: `80%`,
        left: `10%`,
        top: `22%`
      },
      containerStyle: {
        left: `2%`,
        top: `66%`,
        width: `8vw`,
        height: `8vw`,
        maxWidth: `82px`,
        maxHeight: `82px`
      },
      textStyle: {
        position: `absolute`,
        right: `14%`,
        bottom: `115%`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        whiteSpace: `nowrap`,
        fontSize: `1.855vmin`
      },
      text: `Мышцы`,
      number: `2`
    },
    {
      imgSrc: `${betaImg}`,
      imgStyle: {
        position: `absolute`,
        width: `40%`,
        left: `30%`,
        top: `12%`
      },
      containerStyle: {
        left: `50%`,
        top: `4%`,
        width: `8vw`,
        height: `8vw`,
        maxWidth: `82px`,
        maxHeight: `82px`,
        transform: `translate(-50%, 0)`
      },
      textStyle: {
        position: `absolute`,
        left: `10%`,
        bottom: `115%`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        whiteSpace: `nowrap`,
        fontSize: `1.855vmin`
      },
      text: `β-клетки`,
      number: `1`
    },
    {
      imgSrc: `${liverImg}`,
      imgStyle: {
        position: `absolute`,
        width: `70%`,
        left: `15%`,
        top: `25%`
      },
      containerStyle: {
        right: `2%`,
        top: `66%`,
        width: `8vw`,
        height: `8vw`,
        maxWidth: `82px`,
        maxHeight: `82px`
      },
      textStyle: {
        position: `absolute`,
        right: `20%`,
        bottom: `115%`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        whiteSpace: `nowrap`,
        fontSize: `1.855vmin`
      },
      text: `Печень`,
      number: `3`
    }
  ],
  SET_2009: [
    {
      imgSrc: `${betaImg}`,
      imgStyle: {
        position: `absolute`,
        width: `55%`,
        left: `50%`,
        top: `5%`,
        transform: `translate(-50%, 0)`
      },
      containerStyle: {
        left: `50%`,
        top: `4%`,
        width: `5.9vw`,
        height: `5.9vw`,
        maxWidth: `60px`,
        maxHeight: `60px`,
        transform: `translate(-50%, 2.5%)`
      },
      textStyle: {
        position: `absolute`,
        top: `-110%`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        whiteSpace: `nowrap`,
        fontSize: `1.855vmin`
      },
      text: `β-клетки`,
      number: `1`
    },
    {
      imgSrc: `${threeNum}`,
      imgStyle: {
        position: `absolute`,
        width: `35%`,
        left: `50%`,
        top: `50%`,
        transform: `translate(-50%, -50%)`
      },
      containerStyle: {
        left: `79%`,
        top: `4%`,
        width: `5.9vw`,
        height: `5.9vw`,
        maxWidth: `60px`,
        maxHeight: `60px`,
        transform: `translate(-2.95vw, 0)`
      },
      textStyle: {
        position: `absolute`,
        left: `120%`,
        bottom: `10%`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        whiteSpace: `pre`,
        fontSize: `1.855vmin`
      },
      text: `Дефект\nα-клеток`,
      number: ``
    },
    {
      imgSrc: `${lipidImg}`,
      imgStyle: {
        position: `absolute`,
        width: `75%`,
        left: `50%`,
        top: `50%`,
        transform: `translate(-50%, -50%)`
      },
      containerStyle: {
        left: `99%`,
        top: `50%`,
        width: `5.9vw`,
        height: `5.9vw`,
        maxWidth: `60px`,
        maxHeight: `60px`,
        transform: `translate(-2.95vw, -50%)`
      },
      textStyle: {
        position: `absolute`,
        left: `120%`,
        bottom: `-50%`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `flex-start`,
        whiteSpace: `pre`,
        fontSize: `1.855vmin`
      },
      text: `Жировые\nклетки`,
      number: `4`
    },
    {
      imgSrc: `${musleImg}`,
      imgStyle: {
        position: `absolute`,
        width: `90%`,
        left: `50%`,
        top: `50%`,
        transform: `translate(-50%, -50%)`
      },
      containerStyle: {
        left: `79%`,
        top: `78%`,
        width: `5.9vw`,
        height: `5.9vw`,
        maxWidth: `60px`,
        maxHeight: `60px`,
        transform: `translate(-2.95vw, 0)`
      },
      textStyle: {
        position: `absolute`,
        right: `-12%`,
        top: `105%`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        whiteSpace: `nowrap`,
        fontSize: `1.855vmin`
      },
      text: `Мышцы`,
      number: `5`
    },
    {
      imgSrc: `${liverImg}`,
      imgStyle: {
        position: `absolute`,
        width: `80%`,
        left: `45%`,
        top: `50%`,
        transform: `translate(-45%, -50%)`
      },
      containerStyle: {
        left: `50%`,
        top: `78%`,
        width: `5.9vw`,
        height: `5.9vw`,
        maxWidth: `60px`,
        maxHeight: `60px`,
        transform: `translate(-50%, 0)`
      },
      textStyle: {
        position: `absolute`,
        right: `0%`,
        top: `105%`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        whiteSpace: `nowrap`,
        fontSize: `1.855vmin`
      },
      text: `Печень`,
      number: `6`
    },
    {
      imgSrc: `${brainImg}`,
      imgStyle: {
        position: `absolute`,
        width: `78%`,
        left: `50%`,
        top: `50%`,
        transform: `translate(-50%, -50%)`
      },
      containerStyle: {
        left: `16%`,
        top: `78%`,
        width: `5.9vw`,
        height: `5.9vw`,
        maxWidth: `60px`,
        maxHeight: `60px`
      },
      textStyle: {
        position: `absolute`,
        right: `-12%`,
        top: `105%`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        whiteSpace: `pre`,
        textAlign: `center`,
        fontSize: `1.855vmin`
      },
      text: `Головной\nмозг`,
      number: `7`
    },
    {
      imgSrc: `${kidneyImg}`,
      imgStyle: {
        position: `absolute`,
        width: `75%`,
        left: `10%`,
        top: `20%`,
        transform: `translate(-10%, -20%)`
      },
      containerStyle: {
        left: `1.5%`,
        top: `50%`,
        width: `5.9vw`,
        height: `5.9vw`,
        maxWidth: `60px`,
        maxHeight: `60px`,
        transform: `translate(-2.95vw, -50%)`
      },
      textStyle: {
        position: `absolute`,
        left: `-110%`,
        top: `15%`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `flex-end`,
        whiteSpace: `pre`,
        fontSize: `1.855vmin`
      },
      text: `Почки`,
      number: `8`
    },
    {
      imgSrc: `${twoNum}`,
      imgStyle: {
        position: `absolute`,
        width: `35%`,
        left: `50%`,
        top: `50%`,
        transform: `translate(-50%, -50%)`
      },
      containerStyle: {
        left: `21%`,
        top: `4%`,
        width: `5.9vw`,
        height: `5.9vw`,
        maxWidth: `60px`,
        maxHeight: `60px`,
        transform: `translate(-2.95vw, 0)`
      },
      textStyle: {
        position: `absolute`,
        left: `-200%`,
        bottom: `20%`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `flex-end`,
        whiteSpace: `pre`,
        textAlign: `right`,
        fontSize: `1.855vmin`
      },
      text: `Инкретиновый\nэффект`,
      number: ``
    },
  ],
  SET_2016: [
    {
      imgSrc: `${betaImg}`,
      imgStyle: {
        position: `absolute`,
        width: `39%`,
        left: `50%`,
        top: `16%`,
        transform: `translate(-50%, 0)`
      },
      containerStyle: {
        left: `50%`,
        top: `-5%`,
        width: `8.3vw`,
        height: `8.3vw`,
        maxWidth: `85px`,
        maxHeight: `85px`,
        transform: `translate(-50%, 2.5%)`
      },
      textStyle: {
        position: `absolute`,
        right: `-12%`,
        top: `-42%`,
        display: `flex`,
        flexDirection: `row`,
        alignItems: `center`,
        whiteSpace: `nowrap`,
        justifyContent: `space-around`,
        width: `165%`,
        fontSize: `2.3vmin`
      },
      text: `β-клетки`,
      number: `1`
    },
    {
      imgSrc: `${brainImg}`,
      imgStyle: {
        position: `absolute`,
        width: `80%`,
        left: `50%`,
        top: `15%`,
        transform: `translate(-50%, 0)`
      },
      containerStyle: {
        left: `85%`,
        top: `10%`,
        width: `5.9vw`,
        height: `5.9vw`,
        maxWidth: `60px`,
        maxHeight: `60px`
      },
      textStyle: {
        position: `absolute`,
        right: `-155%`,
        top: `-10%`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `flex-start`,
        whiteSpace: `nowrap`,
        justifyContent: `space-around`,
        width: `130%`,
        fontSize: `1.855vmin`
      },
      text: `Головной мозг`,
      number: `7`
    },
    {
      imgSrc: `${gutsImg}`,
      imgStyle: {
        position: `absolute`,
        width: `70%`,
        left: `45%`,
        top: `0`,
        transform: `translate(-45%, 0)`
      },
      containerStyle: {
        left: `3.5%`,
        top: `10%`,
        width: `5.9vw`,
        height: `5.9vw`,
        maxWidth: `60px`,
        maxHeight: `60px`
      },
      textStyle: {
        position: `absolute`,
        right: `120%`,
        top: `-15%`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `flex-end`,
        whiteSpace: `pre`,
        textAlign: `right`,
        fontSize: `1.855vmin`
      },
      text: `Микрофлора\nкишечника`,
      number: `8`
    },
    {
      imgSrc: `${infectionImg}`,
      imgStyle: {
        position: `absolute`,
        width: `80%`,
        left: `40%`,
        top: `12%`,
        transform: `translate(-40%, 0)`
      },
      containerStyle: {
        left: `3.5%`,
        top: `31.5%`,
        width: `5.9vw`,
        height: `5.9vw`,
        maxWidth: `60px`,
        maxHeight: `60px`
      },
      textStyle: {
        position: `absolute`,
        right: `120%`,
        top: `-15%`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `flex-end`,
        whiteSpace: `pre`,
        textAlign: `right`,
        fontSize: `1.855vmin`
      },
      text: `Нарушение имунной\nрегуляции/воспаление`,
      number: `9`
    },
    {
      imgSrc: `${stomachImg}`,
      imgStyle: {
        position: `absolute`,
        width: `72%`,
        left: `40%`,
        top: `11%`,
        transform: `translate(-40%, 0)`
      },
      containerStyle: {
        left: `3.5%`,
        top: `63%`,
        width: `5.9vw`,
        height: `5.9vw`,
        maxWidth: `60px`,
        maxHeight: `60px`
      },
      textStyle: {
        position: `absolute`,
        right: `120%`,
        top: `-15%`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `flex-end`,
        whiteSpace: `pre`,
        textAlign: `right`,
        fontSize: `1.855vmin`
      },
      text: `Желудок`,
      number: `10`
    },
    {
      imgSrc: `${kidneyImg}`,
      imgStyle: {
        position: `absolute`,
        width: `70%`,
        left: `32.5%`,
        top: `8%`,
        transform: `translate(-40%, 0)`
      },
      containerStyle: {
        left: `50%`,
        top: `84%`,
        width: `5.9vw`,
        height: `5.9vw`,
        transform: `translate(-50%, 0)`,
        maxWidth: `60px`,
        maxHeight: `60px`
      },
      textStyle: {
        position: `absolute`,
        right: `120%`,
        top: `-7%`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `flex-end`,
        whiteSpace: `pre`,
        textAlign: `right`,
        fontSize: `1.855vmin`
      },
      text: `Почки`,
      number: `11`
    },
    {
      imgSrc: `${liverImg}`,
      imgStyle: {
        position: `absolute`,
        width: `84%`,
        left: `41%`,
        top: `25%`,
        transform: `translate(-40%, 0)`
      },
      containerStyle: {
        left: `85%`,
        top: `44%`,
        width: `5.9vw`,
        height: `5.9vw`,
        maxWidth: `60px`,
        maxHeight: `60px`
      },
      textStyle: {
        position: `absolute`,
        left: `120%`,
        top: `-10%`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `flex-start`,
        whiteSpace: `pre`,
        textAlign: `right`,
        fontSize: `1.855vmin`
      },
      text: `Печень`,
      number: `6`
    },
    {
      imgSrc: `${musleImg}`,
      imgStyle: {
        position: `absolute`,
        width: `85%`,
        left: `41%`,
        top: `25%`,
        transform: `translate(-40%, 0)`
      },
      containerStyle: {
        left: `85%`,
        top: `64%`,
        width: `5.9vw`,
        height: `5.9vw`,
        maxWidth: `60px`,
        maxHeight: `60px`
      },
      textStyle: {
        position: `absolute`,
        left: `120%`,
        top: `-10%`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `flex-start`,
        whiteSpace: `pre`,
        textAlign: `right`,
        fontSize: `1.855vmin`
      },
      text: `Мышцы`,
      number: `5`
    },
    {
      imgSrc: `${lipidImg}`,
      imgStyle: {
        position: `absolute`,
        width: `75%`,
        left: `50%`,
        top: `12.5%`,
        transform: `translate(-50%, 0)`
      },
      containerStyle: {
        left: `85%`,
        top: `84%`,
        width: `5.9vw`,
        height: `5.9vw`,
        maxWidth: `60px`,
        maxHeight: `60px`
      },
      textStyle: {
        position: `absolute`,
        left: `120%`,
        top: `-10%`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `flex-start`,
        whiteSpace: `pre`,
        textAlign: `right`,
        fontSize: `1.855vmin`
      },
      text: `Жировые клетки`,
      number: `4`
    }
  ]
};
