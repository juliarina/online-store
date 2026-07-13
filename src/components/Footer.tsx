import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";;

function Footer() {
  return (
    <footer className="bg-black text-white mt-10">
      <div className="hidden md:block px-[8vw] pt-10 pb-5">
        <div className="flex justify-between mb-20">
          <div className="self-center mt-3 leading-6 text-sm">
            <span className="mb-3 text-3xl font-hero block">URBAN SHOES</span>
            <span className="block">Jl. Diponegoro No. 47</span>
            <span className="block">Tegalsari</span>
            <span className="block">Surabaya 60264</span>
            <span>Jawa Timur, Indonesia</span>
          </div>
          <div className="text-sm flex gap-[10vw]">
            <div className="leading-7">
              <span className="block text-lg pb-3 font-bold">About</span>
              <span className="block">Service</span>
              <span className="block">Features</span>
              <span className="block">News</span>
            </div>
            <div className="leading-7">
              <span className="block text-lg pb-3 font-bold">Connect</span>
              <span className="block">LinkedIn</span>
              <span className="block">Facebook</span>
              <span className="block">Twitter</span>
              <span className="block">Instagram</span>
            </div>
            <div className="leading-7">
              <span className="block text-lg pb-3 font-bold">Support</span>
              <span className="block">FAQs</span>
              <span className="block">Support Center</span>
              <span className="block">Contact Us</span>
            </div>
          </div>
        </div>
        <div className="text-xs flex justify-between">
          <span>Copyright 2026 © All rights reserved</span>
          <div className="flex gap-[2vw]">
            <span>Terms of Sale</span>
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
            <span>Privacy Settings</span>
          </div>
        </div>
      </div>

      <Accordion
        className="px-[4vw] py-3 md:hidden"
        type="single"
        collapsible
        defaultValue="item-1"
      >
        <AccordionItem value="About" className="py-1">
          <AccordionTrigger className="py-4">About</AccordionTrigger>
          <AccordionContent>Service</AccordionContent>
          <AccordionContent>Features</AccordionContent>
          <AccordionContent className="pb-5">News</AccordionContent>
        </AccordionItem>
        <AccordionItem value="connect" className="py-1">
          <AccordionTrigger className="py-4">Connect</AccordionTrigger>
          <AccordionContent>LinkedIn</AccordionContent>
          <AccordionContent>Facebook</AccordionContent>
          <AccordionContent>Twitter</AccordionContent>
          <AccordionContent className="pb-5">Instagram</AccordionContent>
        </AccordionItem>
        <AccordionItem value="support" className="py-1">
          <AccordionTrigger className="py-4">Support</AccordionTrigger>
          <AccordionContent>FAQs</AccordionContent>
          <AccordionContent>Support Center</AccordionContent>
          <AccordionContent className="pb-5">Contact Us</AccordionContent>
        </AccordionItem>
        <AccordionItem value="" className="text-sm leading-8 pt-5 pb-2">
          <div className="my-3 leading-6 text-sm">
            <span className="mb-3 text-3xl font-hero block">URBAN SHOES</span>
            <span className="block">Jl. Diponegoro No. 47, Tegalsari</span>
            <span className="block">Surabaya 60264, Jawa Timur, Indonesia</span>
          </div>
          <span className="block">Copyright 2026 © All rights reserved</span>
          <span className="block">Terms of Sale</span>
          <span className="block">Terms of Use</span>
          <span className="block">Privacy Policy</span>
          <span className="block">Privacy Settings</span>
        </AccordionItem>
      </Accordion>
    </footer>
  );
}

export default Footer;
