Home = React.createClass({
  mixin: [ReactMeteorData],


  render(){
    return (
      <div className="container">
        <header>
          <h1>Endless Creation</h1>
          <h1>25기 신입생 종합 작품 개발 대회</h1>
          <nav>
            <ul>
              <li>Home</li>
              <li>Timetable</li>
              <li>Directions</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>

        <article>

          <img class="img_button" src="/images/re.svg" onClick={this.handleImgClicked} />


          <button id="first" className="btn"><img className="img_button" src="/images/re.svg" /></button>

          <button id="sec" className="btn"><img className="img_button" src="/images/re.svg" /></button>
          <button className="btn"><img className="img_button" src="/images/re.svg" /></button>
          <button className="btn"><img className="img_button" src="/images/re.svg" /></button>
          <button className="btn"><img className="img_button" src="/images/re.svg" /></button>


          <input type="button" className="img_button2" />

          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>


        </article>



        <footer>
        </footer>
      </div>


    );
  }
});
