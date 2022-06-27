import Image from "../assets/images/van-gogh.png";

function Carousel() {
  return (
    <div>
      <div class="carousel w-4/5 h-fit">
        <div id="slide1" class="carousel-item relative w-full">
          <img src={Image} class="max-w-1/2 h-auto" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img
            src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB"
            class="max-w-1/2 h-auto"
          />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img
            src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6"
            class="max-w-1/2 h-auto"
          />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img
            src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693"
            class="max-w-1/2 h-auto"
          />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
