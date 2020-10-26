import React, { ReactNode } from 'react';
import { Layout, Row } from 'antd';
import Cards from '../Cards/Cards';
import { useQuery } from '@apollo/client';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import { loader } from 'graphql.macro';

const { Content } = Layout;

interface layoutType {
    currentPage: number
}

const LayoutList: React.FC<layoutType> = ({ currentPage }) => {
    let GetData: DocumentNode;

    if (currentPage === 1) {
        GetData = loader("../../graphQL/GetAllAnime.graphql");

    } else if (currentPage === 2) {
        GetData = loader("../../graphQL/GetAllMovie.graphql");
    } else {
        GetData = loader("../../graphQL/GetAllGames.graphql");
    }

    const { data, loading } = useQuery(GetData);

    console.log(data)

    if(loading) {
         return <h1>Loading...</h1>
    }

    const mappingData = data.getAnime || data.getMovie || data.getGames; 

    return (
        <Layout>
            <HeaderComponent currentPage={currentPage}  />
            <Content style={{padding: "10px 10%"}}>
            <Row gutter={[8, 24]}>
            {
                mappingData.map((data: any, index: number) => {
                    let cover;
                    if (currentPage === 1) {
                        cover = `https://desu.shikimori.one${data.image.original}`
                    } else if (currentPage === 2) {
                        cover = `https://image.tmdb.org/t/p/w500${data.poster_path}`
                    } else {
                        cover = data.background_image
                    }
                    

                    return (
                        <Cards key={index} title={data.russian || data.title || data.name} cover={cover} />
                    )
                })  
            }
            </Row>
            </Content>
        </Layout>
    )
}

export default LayoutList;
