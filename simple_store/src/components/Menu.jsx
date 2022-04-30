import React, { Component } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import sections from '../data/sections';

export class Menu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Box >
                <ImageList variant="standard" cols={4} gap={10}>
                    {sections.map((item) => (
                        <ImageListItem key={item.id} cols={item.size} rows={item.size}>
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar sx={{
                                background:
                                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                            }} position="top" title={item.title} subtitle="sub" />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        )
    }
}

export default Menu;