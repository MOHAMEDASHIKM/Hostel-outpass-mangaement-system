import "./styles.css";
import News from "./news";

// import Card from 'react-bootstrap/Card';




export default function Gallery() {

  const g1 = 'https://www.rvscas.ac.in/static/media/infrastructure9.e28e379b.jpg';
  const g2 = 'https://www.rvscas.ac.in/static/media/infrastructure6.98037a7a.jpg';
  const g3 = 'https://www.rvscas.ac.in/static/media/infrastructure5.785c5e2f.jpg';
  const g4 = 'https://rvsgroup.com/images/hostel2.jpg';
  const g5 = 'https://rvsgroup.com/images/hostel1.jpg';
  const g6 = 'https://images.collegedunia.com/public/college_data/images/campusimage/1454740905Campus2.JPG';




  return (
    <>
      <div id="hom">
      
        <p>
          <p id="aboutimg">

            <h4 id="home-head">ABOUT HOSTEL </h4>
            <br />
            <p id="abutcol">
              RVs Arts and Science College Hostel is a prominent accommodation facility for students 
              pursuing various arts and science courses at RVS College. Located within the college campus, 
              the hostel provides a convenient and safe living environment for students from diverse backgrounds.

              The hostel offers well-furnished rooms equipped with basic amenities such as beds, study tables, 
              chairs, and storage facilities. Additionally, there are common areas where students can socialize, 
              study, and relax. The hostel also provides Wi-Fi connectivity, ensuring that students can stay connected 
              with their studies and loved ones.

              Safety and security are top priorities at RVs Arts and Science College Hostel. The premises are monitored 
              by security personnel round the clock, and access to the hostel is restricted to residents and authorized 
              individuals only. This ensures that students can focus on their academics without worrying about their safety.

            </p>

            <h4 id="home-head">GALLERY </h4>
            <br />
            <img src={g1} alt='error' className="gimg" />
            <img src={g2} alt='error' className="gimg" />
            <img src={g3} alt='error' className="gimg" />
            <img src={g4} alt='error' className="gimg" />
            <img src={g5} alt='error' className="gimg" />
            <img src={g6} alt='error' className="gimg" />


          </p>
        </p><br />

      </div >
    </>
  )
}