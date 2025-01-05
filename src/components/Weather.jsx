import {  Button, Card, CardContent, CardHeader, Container,  Divider, Grid2, Skeleton, Stack, Typography } from '@mui/material'
// import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import CloudIcon from '@mui/icons-material/Cloud';
// import Brightness1Icon from '@mui/icons-material/Brightness1';
import { useSelector,useDispatch } from 'react-redux';
import { fetchWeather } from '../feature/weatherSlice';
import shadows from '@mui/material/styles/shadows';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ar';

export default function Weather() {
    const[dateAndTime,setDateAndTime]=useState('')
    const[lang,setLang]=useState('ar')
    dayjs.locale( lang );
    const now = dayjs().format( 'D MMMM YYYY' )
    const dispatch = useDispatch()
    
    const loading = useSelector( state =>
    {
        return state.weather.isLoading
    } )

    const temp = useSelector( state =>
    {
        return state.weather.weather
    } )

    useEffect(()=>{
        setDateAndTime(now)
        dispatch(fetchWeather(lang))
    },[lang])
    const handleChange=()=>{
        const changeLang=lang=='en'?'ar':'en'
        setLang(changeLang)
    }
    const loader = <Stack spacing={ 1 } sx={ { margin: '0 auto', bgcolor: 'rgba(0,0,0,.3)', padding: 2, borderRadius: '1rem', boxShadow: shadows } } >
        <Skeleton variant="circular" width={ 40 } height={ 40 } sx={ { background: '#ccc' } } />
        {/* For variant="text", adjust the height via font-size */ }
        <Skeleton variant="text" sx={ { fontSize: '1rem', background: '#ccc' } } />
        {/* For other variants, adjust the size with `width` and `height` */ }
        <Skeleton variant="rectangular" width={ 210 } height={ 60 } sx={ { background: '#ccc' } } />
        <Skeleton variant="rounded" width={ 210 } height={ 60 } sx={ { background: '#ccc' } } />
    </Stack>;


    const weatherCard=<Card sx={{ margin:'0 auto',bgcolor:'rgba(0,0,0,.3)', color:'#fff', padding:2 , borderRadius:'1rem', boxShadow:shadows}}>
            {/* start card header  */}
            <CardHeader sx={{textAlign:'start', }}   titleTypographyProps={{fontSize:40 ,display:'inline-block', textAlign:'start',marginLeft:2, fontWeight:600}}
            subheaderTypographyProps={{display:'inline-block' ,textAlign:'center',color:'#fff',padding:1}}    title={temp.cityName} subheader={dateAndTime} />
              {/* end card header  */}
            <Divider sx={{borderColor:'primary.contrastText'}}/>
            {/* start card Content  */}
            <CardContent>

                <Grid2 container spacing={1} >
                <Grid2 size={5} >
                    <Stack justifyContent={'center'} alignItems={'center'} flexDirection={'row'} gap={1}  >
                        <Typography  variant="span" sx={{fontSize:'2rem', fontWeight:'500'}} >
                            {temp.number}
                        </Typography>
                        <Typography display={'flex'}  variant="span" >
                            <img src={`https://openweathermap.org/img/wn/${temp.icon}@2x.png`} />
                        </Typography>
                    </Stack>
                    <Stack  flexDirection={'column'} gap={2}  justifyContent={'flex-start'}>
                        <Typography  variant="span" textAlign={'center'}>
                            {temp.desc}
                        
                        </Typography>
                        <Stack  sx={{flexDirection:'row', alignItems:'center',justifyContent:'center'  }}>
                            <Typography  variant="span" sx={{fontSize:'1rem',fontWeight:'300'}}>
                                {lang=='ar'?'الصغرى':'min'} {temp.min}
                            </Typography>
                            <Typography  variant="span" sx={{margin:'0 10px'}}>
                                |
                            </Typography>
                            <Typography  variant="span" sx={{fontSize:'1rem' ,fontWeight:'300'}}>
                                {lang=='ar'?'الكبرى':'MAX'} {temp.max}
                            </Typography>
                        </Stack>
                        
                    </Stack>
                </Grid2>
                <Grid2 size={7} >
                    <CloudIcon sx={{fontSize:'8rem'}} />
                </Grid2>
                </Grid2>
            </CardContent>
            {/* end card Content  */}

        </Card>
  return (
    <>
    <Container maxWidth="sm" sx={{ direction:lang=='ar'?'rtl':'ltr' }} >
              {/* start card  */ }
 {/* //if api not complete fetch show loader else show weatherCard  */}
    {loading?loader:weatherCard}
 {/* //if api not complete fetch show loader else show weatherCard  */}
        {/* end card  */}

        {!loading&&<Typography  sx={{display:'flex',direction:lang=='ar'?'ltr':'rtl'}} >
        <Button variant='text' sx={{color:'primary.contrastText'}} value={lang} onClick={handleChange} >{lang=='ar'?'English':'عربي'}</Button>
        </Typography>}
    </Container>
    </>
  )
}
