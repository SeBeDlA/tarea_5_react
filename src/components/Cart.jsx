import { Button } from '@material-ui/core';
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr, ResumeShop, ContainerCart, ResumeShopContent, ResumeShopTitle, ResumeShopShipping } from './styledComponents';

const Cart = () => {
    const test = useContext(CartContext);

    console.log(test.cartList);

    return (
        <WrapperCart>
            <TitleCart>YOUR CART</TitleCart>
            <ContainerCart>
              <ContentCart>
                {
                  test.cartList?.map(item => (
                    <Product key={item.id}>
                    <ProductDetail>
                      <ImageCart src={item.image[0]} />
                      <Details>
                        <span>
                            <b>Product:</b> {item.name}
                        </span>
                        <Button variant='contained' onClick={() => {test.removeItem(item)}}>Eliminar</Button>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                      <ProductAmount>{item.qty} items - $ {item.cost} each</ProductAmount>
                      </ProductAmountContainer>
                      <ProductPrice>$ {item.cost*item.qty}</ProductPrice>
                    </PriceDetail>
                    </Product>
                  ))
                }  
              </ContentCart>
              {test.cartList.length > 0 &&
              <ResumeShop>
                <ResumeShopContent>
                  <ResumeShopTitle>Resumen de compra</ResumeShopTitle>
                  <div style={{'display': 'flex', 'justifyContent': 'space-between', 'padding': '10px'}}>
                    <span>Subtotal:</span>
                    <ResumeShopShipping>$ {test.getTotal()}</ResumeShopShipping>
                  </div>
                  <div style={{'display': 'flex', 'justifyContent': 'space-between', 'padding': '10px'}}>
                    <span>Envio:</span>
                    <ResumeShopShipping>$ 1500</ResumeShopShipping>
                  </div>
                  <div style={{'display': 'flex', 'justifyContent': 'space-between', 'padding': '10px'}}>
                    <span>Total:</span>
                    <ResumeShopShipping>$ {test.getTotal() + 1500}</ResumeShopShipping>
                  </div>
                </ResumeShopContent>
              </ResumeShop>
              }
            </ContainerCart>
        </WrapperCart>
    );
}

export default Cart;