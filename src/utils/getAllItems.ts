import { shirts,jeans, shoes, watches, products, OversizedShirts, OversizedHoodies, RelaxedFitJeans, SloganTees, PyjamaTrouser, kurtas, makeup, skincare, fragrances, grooming, appliances, decor, bedlinen, cookware, dinnerware, storage, sarees, tops } from './mockdata';

const getAllItems = () => [
  ...shirts, ...jeans, ...shoes, ...watches, ...products,
  ...OversizedShirts, ...OversizedHoodies, ...RelaxedFitJeans, ...SloganTees, ...PyjamaTrouser, ...kurtas, ...makeup, ...skincare, ...fragrances, ...grooming, ...appliances, ...decor, ...bedlinen, ...cookware, ...dinnerware, ...storage, ...sarees, ...tops
];

export default getAllItems;
