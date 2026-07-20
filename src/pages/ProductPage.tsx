import ProductList from "@/components/product/ProductList";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckboxField } from "@/components/forms/CheckboxField";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function ProductPage() {
  return (
    <div className="flex pt-20 px-6">
      <aside className="relative hidden lg:block">
        <div className="w-70 sticky top-20 ml-1">
          <ScrollArea
            type="always"
            className="h-[calc(100vh-80px)] rounded-md border px-4.5 py-2"
          >
            <Accordion
              type="multiple"
              defaultValue={["price", "gender", "sale", "brand", "color"]}
            >
              <AccordionItem key="price" value="price">
                <AccordionTrigger>Price</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2.5">
                  <div className="flex gap-2.5 items-center">
                    <Input placeholder="min" />
                    -
                    <Input placeholder="max" />
                  </div>
                  <Button className="text-[0.8rem] rounded-2xl">Apply</Button>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem key="gender" value="gender">
                <AccordionTrigger>Gender</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2.5">
                  <CheckboxField>Woman</CheckboxField>
                  <CheckboxField>Men</CheckboxField>
                  <CheckboxField>Unisex</CheckboxField>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem key="sale" value="sale">
                <AccordionTrigger>Sale & Offers</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2.5">
                  <CheckboxField>Sale</CheckboxField>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem key="brand" value="brand">
                <AccordionTrigger>Brand</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2.5">
                  <CheckboxField>Adidas</CheckboxField>
                  <CheckboxField>Airwalk</CheckboxField>
                  <CheckboxField>Converse</CheckboxField>
                  <CheckboxField>Diadora</CheckboxField>
                  <CheckboxField>New Balance</CheckboxField>
                  <CheckboxField>Nike</CheckboxField>
                  <CheckboxField>Puma</CheckboxField>
                  <CheckboxField>Reebook</CheckboxField>
                  <CheckboxField>Skechers</CheckboxField>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem key="color" value="color">
                <AccordionTrigger>Color</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2.5">
                  <CheckboxField>Black</CheckboxField>
                  <CheckboxField>Blue</CheckboxField>
                  <CheckboxField>Brown</CheckboxField>
                  <CheckboxField>Green</CheckboxField>
                  <CheckboxField>Grey</CheckboxField>
                  <CheckboxField>Multi-Color</CheckboxField>
                  <CheckboxField>Orange</CheckboxField>
                  <CheckboxField>Pink</CheckboxField>
                  <CheckboxField>Purple</CheckboxField>
                  <CheckboxField>Red</CheckboxField>
                  <CheckboxField>White</CheckboxField>
                  <CheckboxField>Yellow</CheckboxField>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollArea>
        </div>
      </aside>

      <div className="flex flex-col flex-1 lg:pl-7">
        <div className="flex justify-between items-center">
          <span className="px-2">
            Showing <strong>2390</strong> results
          </span>
          <div className="flex gap-3 items-center">
            <span className="text-sm">Sort By: </span>
            <Select>
              <SelectTrigger className="w-45 font-light focus:border-black rounded-xs">
                <SelectValue placeholder="Relevance" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="font-light">
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="name-ascending">
                    Product Name: A-Z
                  </SelectItem>
                  <SelectItem value="name-descending">
                    Product Name: Z-A
                  </SelectItem>
                  <SelectItem value="price-ascending">
                    Price: Low to High
                  </SelectItem>
                  <SelectItem value="price-descending">
                    Price: High to Low
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <ProductList />
          <Pagination className="mt-15">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
