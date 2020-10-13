const {getManifest} = require("workbox-build");

export default function replaceManifest(option) {
    return {
        name: "rollup-plugin-workbox-build",
        transform: async (code) => {

            let injectionPointConf = "self.__WB_MANIFEST"
            let optionForGetManifestConf = defaultConfig

            // divide option
            if (option){
                optionForGetManifestConf = option
                if (option.injectionPoint){
                    const {injectionPoint, ...optionForGetManifest} = option
                    injectionPointConf = injectionPoint
                    optionForGetManifestConf = optionForGetManifest
                }else {
                    optionForGetManifestConf = option
                }
            }

            // merge option
            optionForGetManifestConf = {...optionForGetManifestConf, ...defaultConfig}

            let {manifestEntries} = await getManifest(optionForGetManifestConf)

            return code.replace(injectionPointConf, JSON.stringify(manifestEntries))
        }
    }
}

const defaultConfig = {
    globPatterns: ["**/*.{css,eot,html,ico,jpg,js,json,png,svg,ttf,txt,webmanifest,woff,woff2,webm,xml}"],
    dontCacheBustURLsMatching: /\.\w{8}\./
}