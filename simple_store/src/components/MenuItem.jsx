import React, { Component } from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';

export class MenuItem extends Component {
    constructor() {
        super();
    }
    render() {

        return (
            <>
                <ImageListItem>
                    <img
                        src={`${this.props.image}?w=248&fit=crop&auto=format`}
                        srcSet={`${this.props.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={this.props.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={this.props.title}
                        subtitle={this.props.author}
                        actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ${this.props.title}`}
                            >
                            </IconButton>
                        }
                    />
                </ImageListItem>
            </>
        )
    }
}

export default MenuItem;