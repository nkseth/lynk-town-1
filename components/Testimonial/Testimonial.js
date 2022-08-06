import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import image1 from "/public/assets/images/testimonial/1.png";

const carosuelPoint = [
  {
    id: 1,
    review:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis “",
    img: image1,
    stars: 5,
    name: "Anna Lemon",
    role: "Fashion Designer",
  },

  {
    id: 2,
    review:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis “",
    img: image1,
    stars: 4,
    name: "Anna Lemon",
    role: "Fashion Designer",
  },
  {
    id: 3,
    review:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis “",
    img: image1,
    stars: 2,
    name: "Anna Lemon",
    role: "Fashion Designer",
  },
  {
    id: 4,
    review:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis “",
    img: image1,
    stars: 3,
    name: "Anna Lemon",
    role: "Fashion Designer",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-[#EEECE7] ">
      <div className="container mx-auto py-24 lg:py-10 xl:py-20  px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: false,
          // }}
          slidesPerView={1}
          className="!pb-14 "
        >
          {" "}
          {carosuelPoint.map((item) => {
            const { img, review, stars, id, name, role } = item;

            return (
              <SwiperSlide key={id}>
                <div className="max-w-[767px] mx-auto flex justify-center flex-col items-center">
                  <img
                    src={img.src}
                    style={{
                      width: "199.02px ",
                      height: "199.02px",
                    }}
                    alt=""
                    className="w-[199px] h-[199px] md:w-48 md:h-48"
                  />
                  <div className="flex justify-center my-8 gap-3">
                    {" "}
                    {Array.from({ length: stars }).map((star, idx) => (
                      <svg
                        key={idx}
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.54894 0.831349C8.8483 -0.089962 10.1517 -0.0899632 10.4511 0.831347L11.9697 5.50511C12.1035 5.91713 12.4875 6.19609 12.9207 6.19609H17.835C18.8037 6.19609 19.2065 7.43571 18.4228 8.00511L14.447 10.8937C14.0966 11.1483 13.9499 11.5997 14.0838 12.0117L15.6024 16.6854C15.9017 17.6068 14.8472 18.3729 14.0635 17.8035L10.0878 14.9149C9.7373 14.6603 9.2627 14.6603 8.91221 14.9149L4.93648 17.8035C4.15276 18.3729 3.09828 17.6068 3.39763 16.6854L4.91623 12.0117C5.05011 11.5997 4.90345 11.1483 4.55296 10.8937L0.577221 8.00511C-0.206493 7.43571 0.196283 6.19609 1.16501 6.19609H6.07929C6.51252 6.19609 6.89647 5.91713 7.03035 5.50511L8.54894 0.831349Z"
                          fill="#FFC400"
                        />
                      </svg>
                    ))}{" "}
                  </div>{" "}
                  <h3 className="text-base md:text-2xl text-center">
                    {" "}
                    {review}{" "}
                  </h3>{" "}
                  <div className="py-4 text-sm md:text-base text-center text-[#6A5B40]">
                    <h2> {name} </h2> <h3> {role} </h3>{" "}
                  </div>{" "}
                </div>{" "}
              </SwiperSlide>
            );
          })}{" "}
        </Swiper>{" "}
      </div>{" "}
    </div>
  );
};

export default Testimonial;
