import
React,
{
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';

export interface SharingProps {
    id: string;
    substance: string;
    name: string;
    title: string;
    date: string;
    image: ImageSourcePropType;
    avatar: ImageSourcePropType;
}

interface SharingsContextData {
    sharings: SharingProps[];
}

export const SharingsContext = createContext<SharingsContextData>({} as SharingsContextData);

export const SharingsProvider: React.FC = ({ children }) => {

    const [sharings, setSharings] = useState<SharingProps[]>([]);

    useEffect(() => {
        setSharings([
            {
                id: '001',
                substance: 'React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities. React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities. React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities. ',
                name: 'Marília Garcia',
                title: ' React Native',
                date: '11/11/2021',
                image: require('../../assets/reactnative.png'),
                avatar: {uri: 'https://github.com/GarciaaMarilia.png'}
            },
            {
                id: '002',
                substance: 'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript.',
                name: 'Felipe Silva',
                title: ' TypeScript',
                date: '25/11/2021',
                image: require('../../assets/typescript.png'),
                avatar: {uri: 'https://github.com/GlauberC.png'}
            },
            {
                id: '003',
                substance: 'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.',
                name: 'Arthur Costa',
                title: 'JavaScript',
                date: '04/12/2021',
                image: require('../../assets/javascript.png'),
                avatar: {uri: 'https://github.com/GlauberC.png'}
            },
            {
                id: '004',
                substance: 'React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React ',
                name: 'Lucas Santos',
                title: 'Protocolo HTTP',
                date: '11/12/2021',
                image: require('../../assets/http.png'),
                avatar: {uri: 'https://github.com/GlauberC.png'}
            },
            {
                id: '005',
                substance: 'React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React ',
                name: 'Clara Almeida',
                title: 'FlexBox',
                date: '18/12/2021',
                image: require('../../assets/flexbox.png'),
                avatar: {uri: 'https://github.com/GarciaaMarilia.png'}
            },
            {
                id: '006',
                substance: 'React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React ',
                name: 'Larissa Souza',
                title: 'React JS',
                date: '04/01/2022',
                image: require('../../assets/reactJS.png'),
                avatar: {uri: 'https://github.com/GarciaaMarilia.png'}
            },
        ])
    }, [])

    return (
        <SharingsContext.Provider
            value={{ sharings }}>
            {children}
        </SharingsContext.Provider>
    );
};

export function useSharings(): SharingsContextData {
    const context = useContext(SharingsContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}