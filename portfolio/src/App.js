import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
   <head>
  <meta charset="UTF-8" />
  <title>Portfolio</title>
  <link rel="stylesheet" href="./style.css" />
</head>

<body>
    <header>
        <h1>
            <a>
                Portfolio
            </a>
        </h1>
        <nav>
            <ul>
                <li>
                    <a href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#Work">Work</a>
                </li>
                <li>
                    <a href="#Contact-Me">Contact Me</a>
                </li>
                <li>
                    <a href="#Resume">Resume</a>
                </li>
            </ul>
        </nav>
    </header>
</body>

<section class="background">
</section>
<section class="about-me">
    <h2> About Me </h2>
    <p>
        Hi, my name is Braden and I am a student at Rice Coding Bootcamp. In the future, i hope to be a back end developer. When I am not coding, i enjoy spending time outdoors. I like to grow fresh fruits and vegtiables. I also like to work on cars and figure out how things work. I just recently graduated highschool and took the bootcamp route because i am eager to get into the work field. I work well in groups and often like to be the voice of the group. Below you can find some of my work, as well as my resume and my contact information. 
    </p>
</section>

<section class="Work">
    <h2>Work</h2>
   <a href="https://gregorywyrick.github.io/alcohol-suggestions-project/">alhochol suggestions</a>
   <a href="https://warm-savannah-80854.herokuapp.com/">book worm</a>
</section>

<section class="contact-me">
    <h2> Contact Me</h2>
     <a href="936-777-5619">936-777-5619</a>
     <a href="bra.wales00@gmail.com">bra.wales00@gmail.com</a>
     <a href="https://github.com/BradenWales0">Github</a>

</section>

<section class="Resume">
    <h2>Resume</h2>
</section>
    </div>
  );
}

export default App;
