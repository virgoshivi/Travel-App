import { validateForm } from "../src/client/js/validateForm";

describe(validateForm, () => {
    test("it should return an error if departure date is not present", () => {
        let formData = {
            departure: '',
            returnDate: '03/02/2020',
            city: 'San Diego',
            state: 'CA',
            countryCode: 'US'
        }
        expect(validateForm(formData)).toStrictEqual(['Please enter a departure date']);
    });
    test("it should return an error if return date is not present", () => {
        let formData = {
            departure: '3/2/2020',
            returnDate: '',
            city: 'San Diego',
            state: 'CA',
            countryCode: 'US'
        }
        expect(validateForm(formData)).toStrictEqual(['Please enter a return date']);
    });
    test("it should return an error if city is not present", () => {
        let formData = {
            departure: '3/2/2020',
            returnDate: '3/3/2020',
            city: '',
            state: 'CA',
            countryCode: 'US'
        }
        expect(validateForm(formData)).toStrictEqual(['Please enter a city']);
    });
        test("it should return an error if country is not present", () => {
            let formData = {
                departure: '3/2/2020',
                returnDate: '3/3/2020',
                city: 'San Diego',
                state: 'CA',
                countryCode: ''
            }
            expect(validateForm(formData)).toStrictEqual(['Please enter a country']);
    });
    test("it should return an error if country is US but state is not present", () => {
        let formData = {
            departure: '3/2/2020',
            returnDate: '3/3/2020',
            city: 'San Diego',
            state: '',
            countryCode: 'US'
        }
        expect(validateForm(formData)).toStrictEqual(['Please enter a state']);
    });
    test("it does not return an error if country is not US and state is not present", () => {
        let formData = {
            departure: '3/2/2020',
            returnDate: '3/3/2020',
            city: 'Paris',
            state: '',
            countryCode: 'FR'
        }
        expect(validateForm(formData)).toStrictEqual([]);
        expect(validateForm(formData).length).toBe(0);
    });
    test("it returns multiple errors if multiple fields are missing", () => {
        let formData = {
            departure: '3/2/2020',
            returnDate: '',
            city: 'San Diego',
            state: '',
            countryCode: 'US'
        }
        expect(validateForm(formData)).toStrictEqual(['Please enter a return date', 'Please enter a state']);
        expect(validateForm(formData).length).toBe(2);
    });
});