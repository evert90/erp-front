import { Asset } from "../class/Asset";
import { fetchWrapper } from "../helpers/fetch-wrapper";

const baseUrl = '/assets';

const getAll = (): Promise<any> => {
    return fetchWrapper.get(`${baseUrl}/`)
}

function save(asset: Asset): Promise<Asset> {
    return fetchWrapper.post(`${baseUrl}/`, asset)
        .then((response: Asset) => {
            return response;
        });
}

function getTotalSemLiquidez(assets: Array<Asset>): number {
    return assets.filter(asset => !asset.endValue && asset.liquidez === false)
    ?.map(it => it.initialValue)
    ?.reduce((a, b) => a + b, 0) || 0
}

function getTotalComLiquidez(assets: Array<Asset>): number {
    return assets.filter(asset => !asset.endValue && asset.liquidez)
    ?.map(it => it.initialValue)
    ?.reduce((a, b) => a + b, 0) || 0
}

function getTotal(assets: Array<Asset>): number {
    return assets.filter(asset => !asset.endValue)
    ?.map(it => it.initialValue)
    ?.reduce((a, b) => a + b, 0) || 0
}

function deleteById(id: number): Promise<any> {
    return fetchWrapper.delete(`${baseUrl}/${id}`)
}

export const assetService = {
    getAll: getAll,
    save: save,
    getTotalSemLiquidez: getTotalSemLiquidez,
    getTotalComLiquidez: getTotalComLiquidez,
    getTotal: getTotal,
    deleteById: deleteById,
}