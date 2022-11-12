import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    const [blocks, setBlocks] = useState([]);

    /* Use the map() function to render multiple Blocks! */
    const posts = blocks.map((color) => 
    <Block color = {color} caption = {color}/>); // TODO: edit this variable

    return (
        <div>
            <Menu handleClick={(color) => setBlocks(blocks => [color, ...blocks])}></Menu>

            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;