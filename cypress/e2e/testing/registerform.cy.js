import { formregister } from "../../pages/formregister";
import userdata from "../../fixtures/datainfo.json";

describe('test2', () => {

    it('PomRegisterform', () => {

        formregister.visitbaseURL()
        formregister.formFill(userdata)
        formregister.register(userdata)

        
    });
    
});