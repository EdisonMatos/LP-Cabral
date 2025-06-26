import "primeicons/primeicons.css";
import "primeicons/primeicons.css";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import LogoDisplay from "../sectionElements/LogoDisplay";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import trustedByImg1 from "../../assets/imgs/trustedBy/item1.png";
import trustedByImg2 from "../../assets/imgs/trustedBy/item2.png";
import TrustedByMore from "./TrustedByMore";

const images = [
  {
    src: trustedByImg1,
    alt: "trustedBy1",
  },
  {
    src: trustedByImg2,
    alt: "trustedBy2",
  },
];

export default function TrustedBy() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const onClick = () => {
    setModalTitle("Seguradoras que trabalhamos");
    setModalContent(
      <div>
        <TrustedByMore />
      </div>
    );
    setVisible(true);
  };

  return (
    <div className="w-full pt-[40px] flex flex-col items-center tablet1:pt-[64px] desktop1:pt-[96px] bg-bgSectionDark">
      <SectionHeader
        className="text-center"
        miniTitle="ESCRITÓRIOS PARCEIROS"
        sectionHeaderTitle="Conectados por um compromisso com a excelência jurídica"
        sectionHeaderSubtitle="Conheça os escritórios que caminham conosco, compartilhando valores, ética e a busca por soluções jurídicas eficazes."
        colorMode="light"
      />
      <SectionWrapper>
        <MotionDivDownToUp className="w-full mb-[26px] tablet1:mb-[40px] desktop1:mb-[80px]">
          <LogoDisplay images={images} />
        </MotionDivDownToUp>
        {/* <MotionDivDownToUp className="">
          <Paragraphs className="text-center">
            Para ver todas seguradoras que trabalhamos,{" "}
            <span
              className="transition cursor-pointer text-tertiary hover:underline"
              onClick={onClick}
            >
              clique aqui
            </span>
          </Paragraphs>
        </MotionDivDownToUp> */}
      </SectionWrapper>
      <Dialog
        className="font-secondFont"
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      >
        <p className="m-0 ">{modalContent}</p>
      </Dialog>
    </div>
  );
}
