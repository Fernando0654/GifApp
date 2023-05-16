import { render, screen } from "@testing-library/react";
import { GifItems } from "../../components/GifItems";

describe('Tests on <gifItems />', () => {
    const title = 'Breaking Bad';
    const url = 'https://myurl.com/';

    test('should show image with the correct url and alt', () => { 
        render(<GifItems title={title} url={url} />);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
     });
 });


//  THAAAANKS FOR WATCHING :D