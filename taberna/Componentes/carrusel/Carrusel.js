import Slider from 'react-slick'
const slides = [
  {
    id: 1,
    title: "Slide 1",
    image: "https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg",
  },
  {
    id: 2,
    title: "Slide 2",
    image: "https://www.herzing.edu/sites/default/files/styles/fp_640_288/public/images/blog/web_developer.jpg.webp?itok=QABkWNY0",
  },
  {
    id: 3,
    title: "Slide 3",
    image: "https://www.unicusano.it/blog/wp-content/uploads/2022/08/14.1-come-diventare-full-stack-developer-1280x720.jpg",
  },
  {
    id: 4,
    title: "Slide 4",
    image: "https://www.forbes.com/advisor/wp-content/uploads/2022/08/web_developer.jpeg.jpg",
  },
];


function MyCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Muestra solo un slide a la vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    // nextArrow: <h1>LALALA</h1>,
    // prevArrow: <h1>LOLOLO</h1>
  }

  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div key={slide.id}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '480px',
            boxShadow: '1px'
          }}>
            <img src={slide.image} alt={slide.title}
              style={{
                height: '100%',
                width: '100vw',
                overflow: 'hidden',
                objectFit: 'cover',
                // oculta la parte visible de la imagen que sobresale
              }} />
          </div>
        </div>
      ))}
    </Slider>
  );
}


export default MyCarousel