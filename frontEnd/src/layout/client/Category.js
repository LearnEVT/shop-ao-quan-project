import { Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { get } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import axiosClient from "../../apis/axiosClient";
import ContentTop from "../../components/client/ContentTop";
import ItemCategory from "../../components/client/ItemCategory";
import { StringToSlug } from "../../constant/FunctionCommom";
import { listCategory } from "../../constant/Key";
import { reSetFilter, setCategorySearch, setFilter } from "../../redux/filterProduct/Actions";
export default function Category() {
  const mainBackGround = useSelector((state) => state.colorCommon.mainBackGround);
  const dispatch = useDispatch()
  const [categories,setCategories] = useState([])
  useEffect(() => {
    const fetch = async() => {
      const res = await axiosClient.get(`/api/categorys/all`)
      setCategories(get(res,'data.categorys'))
    }
    fetch()
  },[])
  return (
    <Stack sx={{ background: mainBackGround }}>
      {/* <ContentTop value="CATEGORY" /> */}
      <Grid container
        direction="row"
        flexWrap="wrap"
        padding="10px"
        spacing={2}
        alignItems='center'
        justifyContent='center'
      >
      <Grid onClick={() => {dispatch(setCategorySearch(null))
      dispatch(setFilter({type : "SET_PAGE",filter : 1}))}} item>
       <Link to={`/products`}>
          <ItemCategory  value="All" image="https://vibcare.co.in/wp-content/uploads/2018/12/ALL-PRODUCT-01.png" />
          </Link>
          </Grid>
        {categories?.map((e) => (
          <Grid key={v4()} item>
          <Link to={`/product/${StringToSlug(get(e,'name',''))}`}>
          <ItemCategory  value={e.name} image={e.image} />
          </Link>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
