import { Container, Stack } from "@mui/system";
import React from "react";
import "../../components/StyleComponent/Header.css";
import { Paper, Typography } from "@mui/material";
import Footer from "../../layout/client/Footer";
import PurposeAboutUs from "../../components/client/PurposeAboutUs";
import PersonalityAboutUs from "../../components/client/PersonalityAboutUs";
import Header from "../../layout/client/Header/Index";
import { useSelector } from "react-redux";
import MyTypography from "../../components/client/MyTypography";

export default function AboutUs() {
  const mainBackGround = useSelector((state) => state.colorCommon.mainBackGround);
  const mainBackGround2 = useSelector((state) => state.colorCommon.mainBackGround2);

  return (
    <Stack position="relative">
      {/* <HeaderAboutUs /> */}
      <Header aboutActive/>
      
      <div className="fillTopAboutUs">
      </div>
      <div className="InFillTopAboutUs">
        <div className="ItemInFillTopAboutUs">
          <Typography sx={{fontSize : {md : 'calc(0.5vw + 30px)',xs : 'calc(0.5vw + 20px)'}}}      fontWeight="300" textAlign='center'>
            UT là nền tảng thương mại điện tử hàng đầu ở Đông Nam Á và Đài Loan.
          </Typography>
          <Typography sx={{fontSize : 'calc(0.5vw + 10px)'}} fontWeight='300' textAlign='center'>
           Ra mắt vào năm 2015, nền tảng thương mại UT được xây dựng để cung cấp cho người dùng trải nghiệm dễ dàng, an toàn và nhanh chóng khi mua sắm trực tuyến thông qua hệ điều hành và hỗ trợ thanh toán mạnh mẽ. Chúng tôi tin tưởng mạnh mẽ rằng trải nghiệm mua sắm trực tuyến phải đơn giản, dễ dàng và thú vị về mặt cảm xúc. Niềm tin này truyền cảm hứng và thúc đẩy chúng tôi mỗi ngày tại UT.
          </Typography>
        </div>
      </div>
     <div style={{background : mainBackGround , padding : '2rem 0'}}>
     <Container sx={{marginTop : '2rem', marginBottom : '2rem' }}>
      <Stack direction={{md : 'row' , xs : 'column'}} justifyContent='space-between' spacing={10}>
      <PurposeAboutUs contentTop="Mục đích của chúng tôi" contentBody="Chúng tôi tin tưởng vào sức mạnh biến đổi của công nghệ và muốn thay đổi thế giới tốt đẹp hơn bằng cách cung cấp một nền tảng để kết nối người mua và người bán trong một cộng đồng."/>
      <PurposeAboutUs contentTop="Định vị của chúng tôi" contentBody="Đối với người dùng Internet trong toàn khu vực, Shop mang đến trải nghiệm mua sắm trực tuyến một điểm dừng, cung cấp nhiều lựa chọn sản phẩm, cộng đồng xã hội để khám phá và các dịch vụ hoàn tất đơn hàng liền mạch."/>
      </Stack>
      </Container>
      <Container>
          <Paper elevation={3} sx={{padding : '30px' ,textAlign : 'center',background :mainBackGround2}}>
              <Stack spacing={2} >
                <MyTypography variant="h5">
                Tính cách của chúng tôi
                </MyTypography>
                <Typography  variant="body1" color='#999' sx={{marginBottom : '2rem!important'}}>
                Để xác định chúng ta là ai - cách chúng ta nói chuyện, cư xử hoặc phản ứng với bất kỳ tình huống nào - về bản chất, chúng ta Đơn giản, Hạnh phúc và Cùng nhau. Các thuộc tính chính này hiển thị ở mọi bước trong hành trình Shop.
                </Typography>
                <Stack direction={{md : 'row' , xs : 'column'}} spacing={2} justifyContent='space-between'>
                   <PersonalityAboutUs image="https://cdn.dribbble.com/users/1292088/screenshots/17605335/media/8da5eb8a8b70bc3e3906bcad3c7f0fc6.png?compress=1&resize=1600x1200&vertical=top"  contentTop="Đơn giản" contentBody="Chúng tôi tin vào sự đơn giản và chính trực, đảm bảo một cuộc sống trung thực, thực tế và đúng với bản thân."/>
                   <PersonalityAboutUs image="https://deo.shopeemobile.com/shopee/shopee-careers-live-vn/assets/img/Illustration_2_1.4599c77f.png"  contentTop="Hạnh phúc" contentBody="Chúng tôi thân thiện, vui vẻ và tràn đầy năng lượng, lan tỏa niềm vui với tất cả những người chúng tôi gặp."/>
                   <PersonalityAboutUs image="https://deo.shopeemobile.com/shopee/shopee-careers-live-vn/assets/img/Illustration_3_1.277cccfb.png"  contentTop="Cùng nhau" contentBody="Chúng tôi thích dành thời gian chất lượng bên nhau khi mua sắm trực tuyến với bạn bè và gia đình - làm những điều chúng tôi yêu thích với tư cách là một đơn vị lớn."/>
                </Stack>
              </Stack>
          </Paper>
      </Container>
     </div>
     <Footer/>
    </Stack>
  );
}
