import styled from 'styled-components';

import {IconButton,Checkbox} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const EmailsView = () => {
    return (
        <Wrapper>
            <TopWrapper>
                <Checkbox />

                <IconButton>
                    <RefreshIcon />
                </IconButton>

                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </TopWrapper>
            <EmailsContaier>

            </EmailsContaier>
        </Wrapper>
    )
}
export default EmailsView

const Wrapper = styled.div`

`

const TopWrapper = styled.div`

`

const EmailsContaier = styled.div`

`
