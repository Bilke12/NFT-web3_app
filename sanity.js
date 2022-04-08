import {createCurrentUserHook, createClient} from 'next-sanity'  //128.1K (gzipped:38.4K)
import createImageUrlBuilder from '@sanity/image-url' // 7.3K (gzipped: 2.5K)

export const config= {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2021-03-25',
    useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config)

export const urlFor = (source) => createImageUrlBuilder(config).image(source)