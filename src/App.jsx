import { use, useState } from "react";
import "./App.css";
const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
function handleToggle(){
  toggleButton.classList.toggle('rotate');
  sidebar.classList.toggle('close');

}
function App() {
  return (
    <div className="main">
      <nav id="sidebar">
        <ul>
          <li className="logo">
            <span className="logo-text">
              Formula<span className="secondary">Dash</span>
            </span>
            <button onClick={handleToggle} id="toggle-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#ffffff"
              >
                <path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z" />
              </svg>
            </button>
          </li>
          <li className="active navbutton">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#ffffff"
              >
                <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
              </svg>
              <span>Home</span>
            </button>
          </li>
          <li className="navbutton">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#ffffff"
              >
                <path d="M160-200h160v-320H160v320Zm240 0h160v-560H400v560Zm240 0h160v-240H640v240ZM80-120v-480h240v-240h320v320h240v400H80Z" />
              </svg>
              <span>Standings</span>
            </button>
          </li>
          <li className="navbutton">
            {" "}
            <button>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#ffffff"
              >
                <path d="M280-280h80v-200h-80v200Zm320 0h80v-400h-80v400Zm-160 0h80v-120h-80v120Zm0-200h80v-80h-80v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
              </svg>
              <span>Analysis</span>
            </button>
          </li>
          <li className="navbutton">
            {" "}
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#ffffff"
              >
                <path d="m296-320 122-122 80 80 142-141v63h80v-200H520v80h63l-85 85-80-80-178 179 56 56Zm-96 200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
              </svg>
              <span>Telemetry</span>
            </button>
          </li>
          <li className="navbutton">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#ffffff"
              >
                <path d="M80-120v-80h800v80H80Zm40-120v-280h120v280H120Zm200 0v-480h120v480H320Zm200 0v-360h120v360H520Zm200 0v-600h120v600H720Z" />
              </svg>
              <span>Plots</span>
            </button>
          </li>
        </ul>
      </nav>
      <main>
        <div className="container">
          <h2>Example Heading</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            velit, id ut nemo voluptas minus, deleniti commodi reiciendis,
            nesciunt corporis dolorum? Officia non ullam, odio, quod atque,
            dicta sapiente obcaecati similique modi doloribus quaerat hic
            pariatur aliquid ad accusantium repellendus! Pariatur dolore modi
            voluptates, vero eaque minima enim beatae! Eius inventore eligendi
            illum assumenda quis, ab ut dolor voluptatibus, atque saepe
            reiciendis reprehenderit maxime ex nesciunt aliquid? Nobis dicta,
            iusto omnis cupiditate aspernatur praesentium? Nam esse facilis
            accusantium praesentium obcaecati!
          </p>
        </div>
        <div className="container">
          <h2>Another Example Heading</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            velit, id ut nemo voluptas minus, deleniti commodi reiciendis,
            nesciunt corporis dolorum? Officia non ullam, odio, quod atque,
            dicta sapiente obcaecati similique modi doloribus quaerat hic
            pariatur aliquid ad accusantium repellendus! Pariatur dolore modi
            voluptates, vero eaque minima enim beatae! Eius inventore eligendi
            illum assumenda quis, ab ut dolor voluptatibus, atque saepe
            reiciendis reprehenderit maxime ex nesciunt aliquid? Nobis dicta,
            iusto omnis cupiditate aspernatur praesentium? Nam esse facilis
            accusantium praesentium obcaecati!
          </p>
        </div>
        <div className="container">
          <h2>Yet Another Example Heading</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            velit, id ut nemo voluptas minus, deleniti commodi reiciendis,
            nesciunt corporis dolorum? Officia non ullam, odio, quod atque,
            dicta sapiente obcaecati similique modi doloribus quaerat hic
            pariatur aliquid ad accusantium repellendus! Pariatur dolore modi
            voluptates, vero eaque minima enim beatae! Eius inventore eligendi
            illum assumenda quis, ab ut dolor voluptatibus, atque saepe
            reiciendis reprehenderit maxime ex nesciunt aliquid? Nobis dicta,
            iusto omnis cupiditate aspernatur praesentium? Nam esse facilis
            accusantium praesentium obcaecati! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nam consectetur amet quidem cum
            laborum sunt. Molestias asperiores assumenda dignissimos quis non
            fugiat eaque quasi tenetur amet est ut beatae recusandae vel odit
            enim quaerat sed eveniet, facere iusto nisi consequuntur quae.
            Deserunt consequatur repellendus dicta aliquid facilis nulla,
            quisquam sit alias reiciendis recusandae repudiandae vero quae sed
            dignissimos ratione consequuntur saepe! Quae libero eius porro
            veritatis quo atque, vitae voluptate, ab corrupti dolores neque sit
            cupiditate nihil sapiente unde minus est enim quasi aperiam
            perspiciatis debitis nobis eum. Repellendus, doloremque! Possimus
            animi aspernatur illo corrupti iusto architecto sequi dolore ab!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            similique quos inventore cupiditate, vero nihil modi dolorem,
            debitis dolor placeat reprehenderit ipsam corrupti labore a
            exercitationem! Quaerat cum provident excepturi incidunt enim natus
            fuga error aut maiores explicabo perspiciatis suscipit dolore
            cumque, nulla nemo atque rem. Velit repellendus itaque illum magni
            saepe ex tenetur, nemo pariatur cupiditate rem? Mollitia nobis iusto
            praesentium necessitatibus soluta sequi temporibus ducimus aut.
            Expedita consequatur ad dolorum assumenda et recusandae. Atque neque
            et voluptatibus animi rem, ipsa possimus maxime, autem quisquam
            aperiam enim consequatur cupiditate soluta odit perspiciatis velit
            officia laudantium corporis? Odit laboriosam deleniti dignissimos,
            qui, nihil corrupti similique quae illum nobis dicta sequi?
            Provident inventore dolorum voluptatem voluptatum sequi perspiciatis
            blanditiis sit officiis delectus cum. Deserunt neque possimus
            dolores accusamus temporibus similique quibusdam quod debitis saepe
            officiis ipsa laborum id laboriosam nostrum ex nam porro iusto
            placeat, obcaecati molestiae molestias? Hic accusantium alias fuga
            delectus maiores! Fugit tenetur velit exercitationem ad debitis
            architecto dolore voluptas possimus labore repellendus explicabo
            optio eius alias sunt consectetur dolorem hic deleniti similique,
            libero nemo, excepturi nam nobis voluptates rerum. Perspiciatis
            vitae voluptate, aliquam aut voluptates deserunt deleniti architecto
            quibusdam impedit doloribus iste ex iure ducimus, repellendus
            officiis.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
