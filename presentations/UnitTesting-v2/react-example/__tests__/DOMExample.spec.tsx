import {screen} from '@testing-library/dom'

describe('DOMExample', () => {
    it('should render', () => {
        document.body.innerHTML = `
            <label for="example">Example</label>
            <input id="example" />
        `
        const { getByLabelText } = screen
        expect(getByLabelText('Example')).toBeInTheDocument()
    })
})
