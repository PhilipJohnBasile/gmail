import styled from 'styled-components';

import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import CreateIcon from '@material-ui/icons/Create';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const SideIcons = () => {
    return (
        <Wrapper>
            <CalendarTodayIcon/>
            <EmojiObjectsIcon/>
            <CreateIcon/>
            <AccountCircleIcon/>
            <RemoveIcon/>
            <AddIcon/>
        </Wrapper>
    )
}
export default SideIcons

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 50px);
  place-items: center;
  border-left: 1px solid lightgray;
`
