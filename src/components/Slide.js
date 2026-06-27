import gsap from 'gsap';

export default class Slide {
  constructor(ele, slider) {
    this.ele = ele;
    this.slider = slider;

    this.imgPlaceholder = this.ele.getElementsByClassName("slide__img_placehold")[0];
    this.titleInner = this.ele.getElementsByClassName("slide__title_inner")[0];
    this.titleText = this.ele.getElementsByClassName("slide__title_text")[0];
    this.timeInner = this.ele.getElementsByClassName("slide__time_inner")[0];
    this.timeText = this.ele.getElementsByClassName("slide__time_text")[0];
  }

  /**
   * The animation of hiding the previous slide.
   */
  reverse () {
    this.timeLine.reverse();
  }

  /**
   * The animation of revealing a slide.
   */
  reveal () {
    this.show();

    if (this.timeLine) {
      this.timeLine.restart();
      return;
    }

    this.timeLine = gsap.timeline({
      onReverseComplete: () => {
        this.hide();
        this.slider.move();
      },
      onStart: () => {
        this.slider.inAnimation = true;
      },
      onComplete: () => {
        this.slider.inAnimation = false;
      }
    });

    const easeType = 'sine.inOut';

    this.timeLine
      .to(this.imgPlaceholder, {
        height: 0,
        yPercent: -100,
        duration: 0.45,
        ease: easeType
      })
      .to(this.titleInner, {
        width: '100%',
        opacity: 1,
        duration: 0.35,
        ease: easeType
      }, '-=0.4')
      .to(this.titleText, {
        x: 0,
        opacity: 1,
        duration: 0.35,
        ease: easeType
      }, '-=0.3')
      .to(this.timeInner, {
        width: '100%',
        opacity: 1,
        duration: 0.35,
        ease: easeType
      }, '-=0.2')
      .to(this.timeText, {
        x: 0,
        opacity: 1,
        duration: 0.35,
        ease: easeType
      }, '-=0.15');
  }

  /**
   * Hide the current element and control.
   * */
  hide() {
    this.control.classList.remove('current');
    this.ele.style.opacity = '0';
    this.ele.style.zIndex = '1';
  }

  /**
   * Show the current element and control.
   * */
  show() {
    this.ele.style.opacity = '1';
    this.ele.style.zIndex = '5';
    this.control.classList.add('current');
  }
}
