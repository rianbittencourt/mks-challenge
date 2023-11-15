import React from "react";
import { storiesOf } from "@storybook/react";
import ProductCard from "./ProductCard";

export default {
  title: "Components/ProductCard",
  component: ProductCard,
} as Meta;

const Template: Story<ProductCardProps> = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  product: {
    id: 1,
    name: "Fone de Ouvido",
    brand: "Brand",
    description: "Descrição sobre o Produto.",
    photo:
      "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/audio/g735-wireless-headset/gallery/g735-gallery-1.png?v=1",
    price: "100.00",
  },
};

export const Loading = Template.bind({});
Loading.args = {
  product: null,
};
