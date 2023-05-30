import { Stack } from '@mui/system'
import { get } from 'lodash'
import React, { memo, useEffect, useState } from 'react'
import { v4 } from 'uuid'
import axiosClient from '../../apis/axiosClient'
import { StringToSlug } from '../../constant/FunctionCommom'
import { listCategory } from '../../constant/Key'
import ItemCategoryBanner from './ItemCategoryBanner'
 function CategoryBanner({onHoverSetActive}) {
  const [categories,setCategories] = useState([])
  useEffect(() => {
    const fetch = async() => {
      const res = await axiosClient.get(`/api/categorys/all`)
      setCategories(get(res,'data.categorys'))
    }
    fetch()
  },[])
  return (
    <Stack sx={{display : {md : 'flex' , xs : 'none'}}}  direction='row' spacing={3}  justifyContent='center'>
    {categories?.map((e,i) => <ItemCategoryBanner onHoverSetActive={() => onHoverSetActive(i)} key={v4()} delay={i} value={e.name} linkTo={`/product/${StringToSlug(get(e,'name',''))}`}/>)}
    </Stack>
  )
}
export default memo(CategoryBanner)