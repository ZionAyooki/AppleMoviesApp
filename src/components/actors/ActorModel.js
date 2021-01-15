import moment from 'moment';

class ActorModel {
  constructor(fname, lname, bday, imgUrl, imdbLink) {
    this.fName = fname;
    this.lName = lname;
    this.bday = moment(bday);
    this.imgUrl = imgUrl;
    this.imdbLink = imdbLink;
  }

  getAge = () => {
    const now = moment();
    return now.diff(this.bday, 'years');
  }
}

export default ActorModel;