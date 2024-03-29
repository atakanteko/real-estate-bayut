
type GeoLocation = {
    lat: number;
    lng: number;
};

type Location = {
    id: number;
    level: number;
    externalID: string;
    name: string;
    name_l1: string;
    name_l2: string;
    name_l3: string;
    slug: string;
    slug_l1: string;
    slug_l2: string;
    slug_l3: string;
    type?: string;
};

type Category = {
    id: number;
    level: number;
    externalID: string;
    name: string;
    name_l1: string;
    name_l2: string;
    name_l3: string;
    slug: string;
    slug_l1: string;
    slug_l2: string;
    slug_l3: string;
    nameSingular: string;
    nameSingular_l1: string;
    nameSingular_l2: string;
    nameSingular_l3: string;
};

type CoverPhoto = {
    id: number;
    externalID: string;
    title: null | string;
    orderIndex: number;
    nimaScore: number;
    url: string;
    main: boolean;
};

type PhoneNumber = {
    mobile: string;
    phone: string;
    whatsapp: string;
    phoneNumbers: string[];
    mobileNumbers: string[];
    proxyPhone?: string
};

type Agency = {
    id: number;
    objectID: number;
    name: string;
    name_l1: string;
    name_l2: string;
    name_l3: string;
    externalID: string;
    product: string;
    productScore: number;
    licenses: { number: string; authority: string }[];
    logo: { id: number; url: string };
    slug: string;
    slug_l1: string;
    slug_l2: string;
    slug_l3: string;
    tr: number;
    tier: number;
    roles: any[];
    active: boolean;
    createdAt: string;
    commercialNumber: null | string;
    shortNumber: null | string;
    performanceCohort: string;
};

declare namespace PropertiesTypeSpace {
    type PropertyItem = {
        id: number;
        ownerID: number;
        userExternalID: string;
        sourceID: number;
        state: string;
        _geoloc: GeoLocation;
        geography: GeoLocation;
        purpose: string;
        price: number;
        product: string;
        productLabel: string;
        productScore: number;
        rentFrequency: string;
        referenceNumber: string;
        permitNumber: null | string;
        projectNumber: null | string;
        title: string;
        title_l1: string;
        title_l2: string;
        title_l3: string;
        externalID: string;
        slug: string;
        slug_l1: string;
        slug_l2: string;
        slug_l3: string;
        location: Location[];
        category: Category[];
        createdAt: number;
        updatedAt: number;
        reactivatedAt: number;
        rooms: number;
        baths: number;
        area: number;
        score: number;
        score_l1: number;
        score_l2: number;
        score_l3: number;
        coverPhoto: CoverPhoto;
        photoCount: number;
        videoCount: number;
        panoramaCount: number;
        phoneNumber: PhoneNumber;
        contactName: string;
        agency: Agency;
        hash: string;
        occupancyStatus?: string;
        keywords: string[];
        isVerified: boolean;
        verification: {
            updatedAt: number;
            eligible: boolean;
            status: string;
            verifiedAt: number;
            trucheckedAt: number;
        };
        verifiedScore: number;
        completionStatus: string;
        randBoostScore: number;
        randBoostScore_l1: number;
        randBoostScore_l2: number;
        randBoostScore_l3: number;
        floorPlanID: null | string;
        furnishingStatus: string;
        extraFields: {
            dldBuildingNK: string;
            dldPropertySK: string;
            hasRentTransactions?: boolean;
            hasSaleTransactions?: boolean;
        };
        type: string;
        hasTransactionHistory: boolean;
        hasDldBuildingNk: boolean;
        ownerAgent: {
            externalID: string;
            name: string;
            name_l1: string;
            name_l2: string;
            name_l3: string;
            user_image: string;
            user_image_id: number;
            isTruBroker: boolean;
        };
        amenities: string[];
        amenities_l1: string[];
        amenities_l2: string[];
        amenities_l3: string[];
        cityLevelScore: number;
        indyScore: number;
        indyScore_l1: number;
        indyScore_l2: number;
        indyScore_l3: number;
        hasMatchingFloorPlans: boolean;
        photoIDs: number[];
        hidePrice: boolean;
        locationPurposeTier: number;
        plotArea: null | string;
        objectID: string;
        _highlightResult: any;
    }

    type ApiResponse<T> = {
        hits: T;
        nbHits?: number;
        page?: number;
        nbPages?: number;
        hitsPerPage?: number;
        processingTimeMS?: number;
        serverTimeMS?: number;
        query?: string;
        params?: string;
    }

    type IPropertyState = {
        propertyList: PropertyItem[]
    }

    type PropertyListArgument = {
        locationExternalIDs: string
        purpose?: string
    }
}

export type { PropertiesTypeSpace }
