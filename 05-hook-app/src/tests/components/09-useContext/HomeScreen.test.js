import { HomeScreen } from "../../../components/09-useContext/HomeScreen";
import UserContext from "../../../components/09-useContext/UserContext";
import {mount} from 'enzyme';

describe('test <HomeScreen/>', () => {

    const user = {
        name:'Emanuel',
        email: 'emanuel@react.com'
    }

    const wrapper = mount( 
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen/>
        </UserContext.Provider>
    );
    
    test('snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
