import React from 'react'
import styled from 'styled-components'

const ListItemContainer = styled.div `
    display: flex;
    align-items: center;
`

function MatchListItem () {
    return (
        <div>
            <img src={'https://picsum.photos/30/30'}/>
            <p>Person Name</p>
        </div>
    )
}

export default MatchListItem