import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import LogoDisplayMore from "../sectionElements/LogoDisplayMore";
import trustedByImg1 from "../../assets/imgs/trustedBy/item1.png";
import trustedByImg2 from "../../assets/imgs/trustedBy/item2.png";

const images = [
  {
    src: trustedByImg1,
    alt: "trustedBy1",
  },
  {
    src: trustedByImg2,
    alt: "trustedBy1",
  },
];

export default function TrustedByMore() {
  return (
    <SectionArea className="bg-quinary pt-[20px] pb-0 tablet1:pt-[32px] tablet1:pb-0 desktop1:py-[60px] desktop1:pb-0">
      <p className="text-quaternary mb-[26px] tablet1:mb-[40px] desktop1:mb-[40px] text-paragraph4 font-secondFont text-center px-[10%] text-darker">
        Texto a ser inserido
      </p>
      <SectionWrapper>
        <MotionDivDownToUp className="w-full desktop1:mb-[80px]">
          <LogoDisplayMore images={images} />
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
