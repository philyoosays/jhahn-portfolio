import React from 'react';
import NavBar from './NavBar';
import BackDrop from './BackDrop';
import NavArrows from './NavArrows';

export default class TitleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backdrops: [
        './work/blonde_woman_white_dress.jpg',
        './work/girl_w_horse.jpg',
        './work/little_girl_pigtails.jpg',
        './work/fabric_ensignia.jpg',
      ],
      past: '',
      present: './work/blonde_woman_white_dress.jpg',
      future: '',
      staging: '',
    }
    this.leftArrow = this.leftArrow.bind(this);
    this.rightArrow = this.rightArrow.bind(this);
  }

  componentDidMount() {
    setInterval(() => {

    })
  }



  leftArrow() {
    if(this.state.backdrops.indexOf(this.state.present) === 0) {
      this.setState({
        present: this.state.backdrops[this.state.backdrops.length - 1]
      })
    } else {
      this.setState({
        present: this.state.backdrops[this.state.backdrops.indexOf(this.state.present) - 1]
      })
    }
  }

  rightArrow() {
    if(this.state.backdrops.indexOf(this.state.present) === (this.state.backdrops.length - 1)) {
      this.setState({
        present: this.state.backdrops[0]
      })
    } else {
      this.setState({
        present: this.state.backdrops[this.state.backdrops.indexOf(this.state.present) + 1]
      })
    }
  }

  render() {
    return(
      <div>
        <NavBar />
        <NavArrows left={this.leftArrow} right={this.rightArrow} />
        <BackDrop
          past={this.state.past}
          present={this.state.present}
          future={this.state.future}
        />
      </div>
    );
  }
}
