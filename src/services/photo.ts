import { UtilURL } from 'src/utils';

interface photo {
    author: string;
    photo_url: string;
    title: string;
}

interface photoFromAPI {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}

interface photoFromFaker {
    description: string;
    title: string;
    url: string;
}

async function apiWrapper(url: string): Promise<Response> {
    const request: Request = new Request(url, {
        // mode: 'no-cors',
    });
    const response = await fetch(request);

    return response;
}

async function apiJsonWrapper<T>(url: string): Promise<T> {
    const resBody = await apiWrapper(url);

    return resBody.json();
}

export async function getRandomPhotos(limit: number = 10): Promise<photo[]> {
    // eslint-disable-next-line max-len
    const fetched = await apiJsonWrapper<photoFromAPI[]>(`https://picsum.photos/v2/list?limit=${limit}`);

    return (await fetched).map((imgGenerated: photoFromAPI) => ({
        author: imgGenerated.author,
        photo_url: imgGenerated.download_url,
        title: 'Some random image',
    }));
}

export async function getRandomPhoto(
    width: number = 300,
    height: (number|null) = null,
): Promise<string> {
    const url = new UtilURL('https://picsum.photos');

    url.joinPath(width, height);

    const res = await apiWrapper(url.toString());

    return res.url;
}

export async function getRandomPhotoFaker(
    imgOpt: { width: number, height: number } = { width: 300, height: 400 },
    qty: number = 10,
): Promise<photoFromFaker[]> {
    interface resCollection {
        status: string;
        code: number;
        total: number;
        data: photoFromFaker[];
    }

    const url = new UtilURL('https://fakerapi.it/api/v1/images');
    url.searchParams.set('_width', String(imgOpt.width));
    url.searchParams.set('_height', String(imgOpt.height));
    url.searchParams.set('_quantity', String(qty));
    url.searchParams.set('_type', 'people');

    const res = await apiJsonWrapper<resCollection>(url.toString());

    return res.data;
}
