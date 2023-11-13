class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return `<img src=${avatar} alt="image of dog" id='dog-img'>
        <div id="description">
            <h3>${name}, ${age}</h3>
            <p>${bio}</p>
        </div>`;
  }
}

export default Dog;
