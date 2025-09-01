import React from "react";
import Form from "../form";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const iconSize = 15;

function Contact() {
  return (
    <section className="grid grid-flow-row grid-cols-2 gap-4">
      <div className="">
        <h2>Přijďte, pište, volejte</h2>
        <div className="flex items-center gap-2">
          <IoLocationSharp size={iconSize} />
          <div>Vyšehradská 429/37, Praha 2</div>
        </div>
        <Link href="mailto:info@kaldi.cz" className="flex items-center gap-2">
          <MdEmail size={iconSize} />
          <div>info@kaldi.cz</div>
        </Link>
        <Link href="tel:+420725585535" className="flex items-center gap-2">
          <FiPhoneCall size={iconSize} />
          <div>725 585 535</div>
        </Link>
      </div>
      <Form />
    </section>
  );
}

export default Contact;
