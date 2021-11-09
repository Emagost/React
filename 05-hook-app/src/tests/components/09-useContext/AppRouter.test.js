import {shallow} from 'enzyme';
import { AppRouter } from "../../../components/09-useContext/AppRouter";
import UserContext from '../../../components/09-useContext/UserContext';

describe('test <AppRouter/>', () => {
    
    const user = {
        id:1,
        name:'Emanuel'
    }

    const wrapper = shallow(
        <UserContext.Provider value={{
            user
        }}>
            <AppRouter/>
        </UserContext.Provider>
    )

    test('snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    

});
