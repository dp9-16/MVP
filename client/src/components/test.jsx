const arr = [
      {
          "recipe": {
              "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_af4838c69cdd29d144a30f2d0720acc5",
              "label": "Roasted Delicata Squash recipes",
              "image": "https://edamam-product-images.s3.amazonaws.com/web-img/d21/d210a784fb114bca2d913c0c52c1f475?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e51f77f020694fe706399dc1eef7ea6fcbf467535b673493d2f8ebd497333961",
              "images": {
                  "THUMBNAIL": {
                      "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d21/d210a784fb114bca2d913c0c52c1f475-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ff887435167ded3adbadcc8992dba9ed06781dc179de9806e25bce298ee7d77e",
                      "width": 100,
                      "height": 100
                  },
                  "SMALL": {
                      "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d21/d210a784fb114bca2d913c0c52c1f475-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4182178a4e24c1824cac82a5137774607bb8e03fc64bf656fba112365332c419",
                      "width": 200,
                      "height": 200
                  },
                  "REGULAR": {
                      "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d21/d210a784fb114bca2d913c0c52c1f475?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e51f77f020694fe706399dc1eef7ea6fcbf467535b673493d2f8ebd497333961",
                      "width": 300,
                      "height": 300
                  }
              },
              "source": "Summer Tomato",
              "url": "http://summertomato.com/better-than-butternut-roasted-delicata-squash-recipe/",
              "shareAs": "http://www.edamam.com/recipe/roasted-delicata-squash-recipes-af4838c69cdd29d144a30f2d0720acc5/-/low-sugar/high-fiber",
              "yield": 3.0,
              "dietLabels": [
                  "High-Fiber"
              ],
              "healthLabels": [
                  "Sugar-Conscious",
                  "Low Sugar",
                  "Vegan",
                  "Vegetarian",
                  "Pescatarian",
                  "Paleo",
                  "Mediterranean",
                  "DASH",
                  "Dairy-Free",
                  "Gluten-Free",
                  "Wheat-Free",
                  "Egg-Free",
                  "Peanut-Free",
                  "Tree-Nut-Free",
                  "Soy-Free",
                  "Fish-Free",
                  "Shellfish-Free",
                  "Pork-Free",
                  "Red-Meat-Free",
                  "Crustacean-Free",
                  "Celery-Free",
                  "Mustard-Free",
                  "Sesame-Free",
                  "Lupine-Free",
                  "Mollusk-Free",
                  "Alcohol-Free",
                  "Sulfite-Free",
                  "FODMAP-Free",
                  "Kosher"
              ],
              "cautions": [],
              "ingredientLines": [
                  "2-4 delicata squash, depending on size (~1.5 lbs)",
                  "2 tbsp olive oil",
                  "salt"
              ],
              "ingredients": [
                  {
                      "text": "2-4 delicata squash, depending on size (~1.5 lbs)",
                      "quantity": 3.0,
                      "measure": "<unit>",
                      "food": "squash",
                      "weight": 1293.0,
                      "foodCategory": "vegetables",
                      "foodId": "food_b1a90x2by6m8pnbsdfxnmascz2tc",
                      "image": "https://www.edamam.com/food-img/f90/f903abb8694c9e918040fbd7fb776c4f.jpg"
                  },
                  {
                      "text": "2 tbsp olive oil",
                      "quantity": 2.0,
                      "measure": "tablespoon",
                      "food": "olive oil",
                      "weight": 27.0,
                      "foodCategory": "Oils",
                      "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                      "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                  },
                  {
                      "text": "salt",
                      "quantity": 0.0,
                      "measure": null,
                      "food": "salt",
                      "weight": 7.92,
                      "foodCategory": "Condiments and sauces",
                      "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                      "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                  }
              ],
              "calories": 755.8800000000001,
              "totalCO2Emissions": 850.3007868120001,
              "co2EmissionsClass": "C",
              "totalWeight": 1327.8100608247423,
              "totalTime": 50.0,
              "cuisineType": [
                  "american"
              ],
              "mealType": [
                  "lunch/dinner"
              ],
              "dishType": [
                  "main course"
              ],
              "totalNutrients": {
                  "ENERC_KCAL": {
                      "label": "Energy",
                      "quantity": 755.8800000000001,
                      "unit": "kcal"
                  },
                  "FAT": {
                      "label": "Fat",
                      "quantity": 28.293,
                      "unit": "g"
                  },
                  "FASAT": {
                      "label": "Saturated",
                      "quantity": 3.9975300000000002,
                      "unit": "g"
                  },
                  "FATRN": {
                      "label": "Trans",
                      "quantity": 0.0,
                      "unit": "g"
                  },
                  "FAMS": {
                      "label": "Monounsaturated",
                      "quantity": 19.80051,
                      "unit": "g"
                  },
                  "FAPU": {
                      "label": "Polyunsaturated",
                      "quantity": 3.37806,
                      "unit": "g"
                  },
                  "CHOCDF": {
                      "label": "Carbs",
                      "quantity": 134.472,
                      "unit": "g"
                  },
                  "CHOCDF.net": {
                      "label": "Carbohydrates (net)",
                      "quantity": 115.077,
                      "unit": "g"
                  },
                  "FIBTG": {
                      "label": "Fiber",
                      "quantity": 19.395,
                      "unit": "g"
                  },
                  "SUGAR": {
                      "label": "Sugars",
                      "quantity": 0.0,
                      "unit": "g"
                  },
                  "PROCNT": {
                      "label": "Protein",
                      "quantity": 10.344000000000001,
                      "unit": "g"
                  },
                  "CHOLE": {
                      "label": "Cholesterol",
                      "quantity": 0.0,
                      "unit": "mg"
                  },
                  "NA": {
                      "label": "Sodium",
                      "quantity": 3069.6336,
                      "unit": "mg"
                  },
                  "CA": {
                      "label": "Calcium",
                      "quantity": 428.8344145979381,
                      "unit": "mg"
                  },
                  "MG": {
                      "label": "Magnesium",
                      "quantity": 413.8381006082474,
                      "unit": "mg"
                  },
                  "K": {
                      "label": "Potassium",
                      "quantity": 4487.6048048659795,
                      "unit": "mg"
                  },
                  "FE": {
                      "label": "Iron",
                      "quantity": 9.227973200721648,
                      "unit": "mg"
                  },
                  "ZN": {
                      "label": "Zinc",
                      "quantity": 1.688710060824742,
                      "unit": "mg"
                  },
                  "P": {
                      "label": "Phosphorus",
                      "quantity": 465.48,
                      "unit": "mg"
                  },
                  "VITA_RAE": {
                      "label": "Vitamin A",
                      "quantity": 232.74,
                      "unit": "µg"
                  },
                  "VITC": {
                      "label": "Vitamin C",
                      "quantity": 142.23,
                      "unit": "mg"
                  },
                  "THIA": {
                      "label": "Thiamin (B1)",
                      "quantity": 1.8102,
                      "unit": "mg"
                  },
                  "RIBF": {
                      "label": "Riboflavin (B2)",
                      "quantity": 0.1293,
                      "unit": "mg"
                  },
                  "NIA": {
                      "label": "Niacin (B3)",
                      "quantity": 9.050999999999998,
                      "unit": "mg"
                  },
                  "VITB6A": {
                      "label": "Vitamin B6",
                      "quantity": 1.99122,
                      "unit": "mg"
                  },
                  "FOLDFE": {
                      "label": "Folate equivalent (total)",
                      "quantity": 219.81,
                      "unit": "µg"
                  },
                  "FOLFD": {
                      "label": "Folate (food)",
                      "quantity": 219.81,
                      "unit": "µg"
                  },
                  "FOLAC": {
                      "label": "Folic acid",
                      "quantity": 0.0,
                      "unit": "µg"
                  },
                  "VITB12": {
                      "label": "Vitamin B12",
                      "quantity": 0.0,
                      "unit": "µg"
                  },
                  "VITD": {
                      "label": "Vitamin D",
                      "quantity": 0.0,
                      "unit": "µg"
                  },
                  "TOCPHA": {
                      "label": "Vitamin E",
                      "quantity": 3.888,
                      "unit": "mg"
                  },
                  "VITK1": {
                      "label": "Vitamin K",
                      "quantity": 16.254,
                      "unit": "µg"
                  },
                  "WATER": {
                      "label": "Water",
                      "quantity": 1135.2696201216495,
                      "unit": "g"
                  }
              },
              "totalDaily": {
                  "ENERC_KCAL": {
                      "label": "Energy",
                      "quantity": 37.794000000000004,
                      "unit": "%"
                  },
                  "FAT": {
                      "label": "Fat",
                      "quantity": 43.527692307692305,
                      "unit": "%"
                  },
                  "FASAT": {
                      "label": "Saturated",
                      "quantity": 19.987650000000002,
                      "unit": "%"
                  },
                  "CHOCDF": {
                      "label": "Carbs",
                      "quantity": 44.824000000000005,
                      "unit": "%"
                  },
                  "FIBTG": {
                      "label": "Fiber",
                      "quantity": 77.58,
                      "unit": "%"
                  },
                  "PROCNT": {
                      "label": "Protein",
                      "quantity": 20.688000000000002,
                      "unit": "%"
                  },
                  "CHOLE": {
                      "label": "Cholesterol",
                      "quantity": 0.0,
                      "unit": "%"
                  },
                  "NA": {
                      "label": "Sodium",
                      "quantity": 127.9014,
                      "unit": "%"
                  },
                  "CA": {
                      "label": "Calcium",
                      "quantity": 42.883441459793815,
                      "unit": "%"
                  },
                  "MG": {
                      "label": "Magnesium",
                      "quantity": 98.53288109720177,
                      "unit": "%"
                  },
                  "K": {
                      "label": "Potassium",
                      "quantity": 95.48095329502085,
                      "unit": "%"
                  },
                  "FE": {
                      "label": "Iron",
                      "quantity": 51.26651778178693,
                      "unit": "%"
                  },
                  "ZN": {
                      "label": "Zinc",
                      "quantity": 15.35190964386129,
                      "unit": "%"
                  },
                  "P": {
                      "label": "Phosphorus",
                      "quantity": 66.49714285714286,
                      "unit": "%"
                  },
                  "VITA_RAE": {
                      "label": "Vitamin A",
                      "quantity": 25.86,
                      "unit": "%"
                  },
                  "VITC": {
                      "label": "Vitamin C",
                      "quantity": 158.0333333333333,
                      "unit": "%"
                  },
                  "THIA": {
                      "label": "Thiamin (B1)",
                      "quantity": 150.85000000000002,
                      "unit": "%"
                  },
                  "RIBF": {
                      "label": "Riboflavin (B2)",
                      "quantity": 9.946153846153846,
                      "unit": "%"
                  },
                  "NIA": {
                      "label": "Niacin (B3)",
                      "quantity": 56.56874999999999,
                      "unit": "%"
                  },
                  "VITB6A": {
                      "label": "Vitamin B6",
                      "quantity": 153.17076923076922,
                      "unit": "%"
                  },
                  "FOLDFE": {
                      "label": "Folate equivalent (total)",
                      "quantity": 54.9525,
                      "unit": "%"
                  },
                  "VITB12": {
                      "label": "Vitamin B12",
                      "quantity": 0.0,
                      "unit": "%"
                  },
                  "VITD": {
                      "label": "Vitamin D",
                      "quantity": 0.0,
                      "unit": "%"
                  },
                  "TOCPHA": {
                      "label": "Vitamin E",
                      "quantity": 25.92,
                      "unit": "%"
                  },
                  "VITK1": {
                      "label": "Vitamin K",
                      "quantity": 13.545,
                      "unit": "%"
                  }
              },
              "digest": [
                  {
                      "label": "Fat",
                      "tag": "FAT",
                      "schemaOrgTag": "fatContent",
                      "total": 28.293,
                      "hasRDI": true,
                      "daily": 43.527692307692305,
                      "unit": "g",
                      "sub": [
                          {
                              "label": "Saturated",
                              "tag": "FASAT",
                              "schemaOrgTag": "saturatedFatContent",
                              "total": 3.9975300000000002,
                              "hasRDI": true,
                              "daily": 19.987650000000002,
                              "unit": "g"
                          },
                          {
                              "label": "Trans",
                              "tag": "FATRN",
                              "schemaOrgTag": "transFatContent",
                              "total": 0.0,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Monounsaturated",
                              "tag": "FAMS",
                              "schemaOrgTag": null,
                              "total": 19.80051,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Polyunsaturated",
                              "tag": "FAPU",
                              "schemaOrgTag": null,
                              "total": 3.37806,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          }
                      ]
                  },
                  {
                      "label": "Carbs",
                      "tag": "CHOCDF",
                      "schemaOrgTag": "carbohydrateContent",
                      "total": 134.472,
                      "hasRDI": true,
                      "daily": 44.824000000000005,
                      "unit": "g",
                      "sub": [
                          {
                              "label": "Carbs (net)",
                              "tag": "CHOCDF.net",
                              "schemaOrgTag": null,
                              "total": 115.077,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Fiber",
                              "tag": "FIBTG",
                              "schemaOrgTag": "fiberContent",
                              "total": 19.395,
                              "hasRDI": true,
                              "daily": 77.58,
                              "unit": "g"
                          },
                          {
                              "label": "Sugars",
                              "tag": "SUGAR",
                              "schemaOrgTag": "sugarContent",
                              "total": 0.0,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Sugars, added",
                              "tag": "SUGAR.added",
                              "schemaOrgTag": null,
                              "total": 0.0,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          }
                      ]
                  },
                  {
                      "label": "Protein",
                      "tag": "PROCNT",
                      "schemaOrgTag": "proteinContent",
                      "total": 10.344000000000001,
                      "hasRDI": true,
                      "daily": 20.688000000000002,
                      "unit": "g"
                  },
                  {
                      "label": "Cholesterol",
                      "tag": "CHOLE",
                      "schemaOrgTag": "cholesterolContent",
                      "total": 0.0,
                      "hasRDI": true,
                      "daily": 0.0,
                      "unit": "mg"
                  },
                  {
                      "label": "Sodium",
                      "tag": "NA",
                      "schemaOrgTag": "sodiumContent",
                      "total": 3069.6336,
                      "hasRDI": true,
                      "daily": 127.9014,
                      "unit": "mg"
                  },
                  {
                      "label": "Calcium",
                      "tag": "CA",
                      "schemaOrgTag": null,
                      "total": 428.8344145979381,
                      "hasRDI": true,
                      "daily": 42.883441459793815,
                      "unit": "mg"
                  },
                  {
                      "label": "Magnesium",
                      "tag": "MG",
                      "schemaOrgTag": null,
                      "total": 413.8381006082474,
                      "hasRDI": true,
                      "daily": 98.53288109720177,
                      "unit": "mg"
                  },
                  {
                      "label": "Potassium",
                      "tag": "K",
                      "schemaOrgTag": null,
                      "total": 4487.6048048659795,
                      "hasRDI": true,
                      "daily": 95.48095329502085,
                      "unit": "mg"
                  },
                  {
                      "label": "Iron",
                      "tag": "FE",
                      "schemaOrgTag": null,
                      "total": 9.227973200721648,
                      "hasRDI": true,
                      "daily": 51.26651778178693,
                      "unit": "mg"
                  },
                  {
                      "label": "Zinc",
                      "tag": "ZN",
                      "schemaOrgTag": null,
                      "total": 1.688710060824742,
                      "hasRDI": true,
                      "daily": 15.35190964386129,
                      "unit": "mg"
                  },
                  {
                      "label": "Phosphorus",
                      "tag": "P",
                      "schemaOrgTag": null,
                      "total": 465.48,
                      "hasRDI": true,
                      "daily": 66.49714285714286,
                      "unit": "mg"
                  },
                  {
                      "label": "Vitamin A",
                      "tag": "VITA_RAE",
                      "schemaOrgTag": null,
                      "total": 232.74,
                      "hasRDI": true,
                      "daily": 25.86,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin C",
                      "tag": "VITC",
                      "schemaOrgTag": null,
                      "total": 142.23,
                      "hasRDI": true,
                      "daily": 158.0333333333333,
                      "unit": "mg"
                  },
                  {
                      "label": "Thiamin (B1)",
                      "tag": "THIA",
                      "schemaOrgTag": null,
                      "total": 1.8102,
                      "hasRDI": true,
                      "daily": 150.85000000000002,
                      "unit": "mg"
                  },
                  {
                      "label": "Riboflavin (B2)",
                      "tag": "RIBF",
                      "schemaOrgTag": null,
                      "total": 0.1293,
                      "hasRDI": true,
                      "daily": 9.946153846153846,
                      "unit": "mg"
                  },
                  {
                      "label": "Niacin (B3)",
                      "tag": "NIA",
                      "schemaOrgTag": null,
                      "total": 9.050999999999998,
                      "hasRDI": true,
                      "daily": 56.56874999999999,
                      "unit": "mg"
                  },
                  {
                      "label": "Vitamin B6",
                      "tag": "VITB6A",
                      "schemaOrgTag": null,
                      "total": 1.99122,
                      "hasRDI": true,
                      "daily": 153.17076923076922,
                      "unit": "mg"
                  },
                  {
                      "label": "Folate equivalent (total)",
                      "tag": "FOLDFE",
                      "schemaOrgTag": null,
                      "total": 219.81,
                      "hasRDI": true,
                      "daily": 54.9525,
                      "unit": "µg"
                  },
                  {
                      "label": "Folate (food)",
                      "tag": "FOLFD",
                      "schemaOrgTag": null,
                      "total": 219.81,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Folic acid",
                      "tag": "FOLAC",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin B12",
                      "tag": "VITB12",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": true,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin D",
                      "tag": "VITD",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": true,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin E",
                      "tag": "TOCPHA",
                      "schemaOrgTag": null,
                      "total": 3.888,
                      "hasRDI": true,
                      "daily": 25.92,
                      "unit": "mg"
                  },
                  {
                      "label": "Vitamin K",
                      "tag": "VITK1",
                      "schemaOrgTag": null,
                      "total": 16.254,
                      "hasRDI": true,
                      "daily": 13.545,
                      "unit": "µg"
                  },
                  {
                      "label": "Sugar alcohols",
                      "tag": "Sugar.alcohol",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "g"
                  },
                  {
                      "label": "Water",
                      "tag": "WATER",
                      "schemaOrgTag": null,
                      "total": 1135.2696201216495,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "g"
                  }
              ]
          },
          "_links": {
              "self": {
                  "href": "https://api.edamam.com/api/recipes/v2/af4838c69cdd29d144a30f2d0720acc5?type=public&app_id=ab54757d&app_key=b3218f5346afe1f35a7cb3650de96b38",
                  "title": "Self"
              }
          }
      },
      {
          "recipe": {
              "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b0ce19bb8c5ccfaa81f3ffedb5972fc7",
              "label": "Asian Style Chicken Stir-Fry recipes",
              "image": "https://edamam-product-images.s3.amazonaws.com/web-img/137/13742bf81daa0af7d46e8902b42f4248?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=57cffa94acb7d3409ee038888bc01c7964dbdcebb458a071b204145155f014e8",
              "images": {
                  "THUMBNAIL": {
                      "url": "https://edamam-product-images.s3.amazonaws.com/web-img/137/13742bf81daa0af7d46e8902b42f4248-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=779df362982f7d4613c38f7c84f22749f1bbb11c6195dee3b0166dd0cb6c6fa0",
                      "width": 100,
                      "height": 100
                  },
                  "SMALL": {
                      "url": "https://edamam-product-images.s3.amazonaws.com/web-img/137/13742bf81daa0af7d46e8902b42f4248-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e5f059639c194dd144138f785ff28ca5f66fd59725cdc157025ebfb39c7276c0",
                      "width": 200,
                      "height": 200
                  },
                  "REGULAR": {
                      "url": "https://edamam-product-images.s3.amazonaws.com/web-img/137/13742bf81daa0af7d46e8902b42f4248?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=57cffa94acb7d3409ee038888bc01c7964dbdcebb458a071b204145155f014e8",
                      "width": 300,
                      "height": 300
                  }
              },
              "source": "dailydealsfromanerdmom.com",
              "url": "http://dailydealsfromanerdmom.com/asian-style-chicken-stir-fry-recipe/",
              "shareAs": "http://www.edamam.com/recipe/asian-style-chicken-stir-fry-recipes-b0ce19bb8c5ccfaa81f3ffedb5972fc7/-/low-sugar/high-fiber",
              "yield": 4.0,
              "dietLabels": [
                  "High-Fiber",
                  "Low-Fat"
              ],
              "healthLabels": [
                  "Sugar-Conscious",
                  "Low Sugar",
                  "Mediterranean",
                  "DASH",
                  "Dairy-Free",
                  "Gluten-Free",
                  "Wheat-Free",
                  "Egg-Free",
                  "Peanut-Free",
                  "Tree-Nut-Free",
                  "Soy-Free",
                  "Fish-Free",
                  "Shellfish-Free",
                  "Pork-Free",
                  "Red-Meat-Free",
                  "Crustacean-Free",
                  "Celery-Free",
                  "Mustard-Free",
                  "Sesame-Free",
                  "Lupine-Free",
                  "Mollusk-Free",
                  "Alcohol-Free",
                  "No oil added",
                  "Sulfite-Free",
                  "Kosher"
              ],
              "cautions": [
                  "Sulfites"
              ],
              "ingredientLines": [
                  "24 oz. bag of Asian Style Stir-Fry Vegetables (we had Schwan‘s brand on hand)",
                  "3 C Instant White Rice",
                  "3-4 Chicken Breasts"
              ],
              "ingredients": [
                  {
                      "text": "24 oz. bag of Asian Style Stir-Fry Vegetables (we had Schwan‘s brand on hand)",
                      "quantity": 24.0,
                      "measure": "ounce",
                      "food": "Vegetables",
                      "weight": 680.388555,
                      "foodCategory": "vegetables",
                      "foodId": "food_bitqzx8b319psvbib2dufarphbxy",
                      "image": "https://www.edamam.com/food-img/f3f/f3fa6996eba331be219778406f67a5a3.jpg"
                  },
                  {
                      "text": "3 C Instant White Rice",
                      "quantity": 3.0,
                      "measure": "cup",
                      "food": "White Rice",
                      "weight": 585.0,
                      "foodCategory": "grains",
                      "foodId": "food_bpumdjzb5rtqaeabb0kbgbcgr4t9",
                      "image": "https://www.edamam.com/food-img/0fc/0fc9fa8a3e0276198d75b2e259068f8a.jpg"
                  },
                  {
                      "text": "3-4 Chicken Breasts",
                      "quantity": 3.5,
                      "measure": "<unit>",
                      "food": "Chicken Breasts",
                      "weight": 952.0,
                      "foodCategory": "Poultry",
                      "foodId": "food_bdrxu94aj3x2djbpur8dhagfhkcn",
                      "image": "https://www.edamam.com/food-img/da5/da510379d3650787338ca16fb69f4c94.jpg"
                  }
              ],
              "calories": 3738.2797596,
              "totalCO2Emissions": 10578.43163415,
              "co2EmissionsClass": "G",
              "totalWeight": 2217.388555,
              "totalTime": 35.0,
              "cuisineType": [
                  "chinese",
                  "asian"
              ],
              "mealType": [
                  "lunch/dinner"
              ],
              "dishType": [
                  "main course"
              ],
              "totalNutrients": {
                  "ENERC_KCAL": {
                      "label": "Energy",
                      "quantity": 3738.2797596,
                      "unit": "kcal"
                  },
                  "FAT": {
                      "label": "Fat",
                      "quantity": 31.873420486,
                      "unit": "g"
                  },
                  "FASAT": {
                      "label": "Saturated",
                      "quantity": 6.9508407839,
                      "unit": "g"
                  },
                  "FATRN": {
                      "label": "Trans",
                      "quantity": 0.06664,
                      "unit": "g"
                  },
                  "FAMS": {
                      "label": "Monounsaturated",
                      "quantity": 7.82905045205,
                      "unit": "g"
                  },
                  "FAPU": {
                      "label": "Polyunsaturated",
                      "quantity": 6.54214310425,
                      "unit": "g"
                  },
                  "CHOCDF": {
                      "label": "Carbs",
                      "quantity": 555.757454925,
                      "unit": "g"
                  },
                  "CHOCDF.net": {
                      "label": "Carbohydrates (net)",
                      "quantity": 528.5419127250001,
                      "unit": "g"
                  },
                  "FIBTG": {
                      "label": "Fiber",
                      "quantity": 27.2155422,
                      "unit": "g"
                  },
                  "SUGAR": {
                      "label": "Sugars",
                      "quantity": 0.0,
                      "unit": "g"
                  },
                  "PROCNT": {
                      "label": "Protein",
                      "quantity": 275.5254388815,
                      "unit": "g"
                  },
                  "CHOLE": {
                      "label": "Cholesterol",
                      "quantity": 694.9599999999999,
                      "unit": "mg"
                  },
                  "NA": {
                      "label": "Sodium",
                      "quantity": 754.0326208500001,
                      "unit": "mg"
                  },
                  "CA": {
                      "label": "Calcium",
                      "quantity": 270.34713875,
                      "unit": "mg"
                  },
                  "MG": {
                      "label": "Magnesium",
                      "quantity": 634.6032532,
                      "unit": "mg"
                  },
                  "K": {
                      "label": "Potassium",
                      "quantity": 5125.2037366,
                      "unit": "mg"
                  },
                  "FE": {
                      "label": "Iron",
                      "quantity": 14.6660912725,
                      "unit": "mg"
                  },
                  "ZN": {
                      "label": "Zinc",
                      "quantity": 16.3213484975,
                      "unit": "mg"
                  },
                  "P": {
                      "label": "Phosphorus",
                      "quantity": 3060.98924745,
                      "unit": "mg"
                  },
                  "VITA_RAE": {
                      "label": "Vitamin A",
                      "quantity": 1813.8669297000001,
                      "unit": "µg"
                  },
                  "VITC": {
                      "label": "Vitamin C",
                      "quantity": 70.76040972000001,
                      "unit": "mg"
                  },
                  "THIA": {
                      "label": "Thiamin (B1)",
                      "quantity": 2.1344540371000003,
                      "unit": "mg"
                  },
                  "RIBF": {
                      "label": "Riboflavin (B2)",
                      "quantity": 2.54417027175,
                      "unit": "mg"
                  },
                  "NIA": {
                      "label": "Niacin (B3)",
                      "quantity": 109.2568569375,
                      "unit": "mg"
                  },
                  "VITB6A": {
                      "label": "Vitamin B6",
                      "quantity": 9.2221430128,
                      "unit": "mg"
                  },
                  "FOLDFE": {
                      "label": "Folate equivalent (total)",
                      "quantity": 335.64268095,
                      "unit": "µg"
                  },
                  "FOLFD": {
                      "label": "Folate (food)",
                      "quantity": 335.64268095,
                      "unit": "µg"
                  },
                  "FOLAC": {
                      "label": "Folic acid",
                      "quantity": 0.0,
                      "unit": "µg"
                  },
                  "VITB12": {
                      "label": "Vitamin B12",
                      "quantity": 1.9991999999999999,
                      "unit": "µg"
                  },
                  "VITD": {
                      "label": "Vitamin D",
                      "quantity": 0.0,
                      "unit": "µg"
                  },
                  "TOCPHA": {
                      "label": "Vitamin E",
                      "quantity": 5.3312,
                      "unit": "mg"
                  },
                  "VITK1": {
                      "label": "Vitamin K",
                      "quantity": 0.0,
                      "unit": "µg"
                  },
                  "WATER": {
                      "label": "Water",
                      "quantity": 1337.592003655,
                      "unit": "g"
                  }
              },
              "totalDaily": {
                  "ENERC_KCAL": {
                      "label": "Energy",
                      "quantity": 186.91398798,
                      "unit": "%"
                  },
                  "FAT": {
                      "label": "Fat",
                      "quantity": 49.036031516923074,
                      "unit": "%"
                  },
                  "FASAT": {
                      "label": "Saturated",
                      "quantity": 34.7542039195,
                      "unit": "%"
                  },
                  "CHOCDF": {
                      "label": "Carbs",
                      "quantity": 185.25248497500002,
                      "unit": "%"
                  },
                  "FIBTG": {
                      "label": "Fiber",
                      "quantity": 108.8621688,
                      "unit": "%"
                  },
                  "PROCNT": {
                      "label": "Protein",
                      "quantity": 551.050877763,
                      "unit": "%"
                  },
                  "CHOLE": {
                      "label": "Cholesterol",
                      "quantity": 231.65333333333328,
                      "unit": "%"
                  },
                  "NA": {
                      "label": "Sodium",
                      "quantity": 31.418025868750004,
                      "unit": "%"
                  },
                  "CA": {
                      "label": "Calcium",
                      "quantity": 27.034713875,
                      "unit": "%"
                  },
                  "MG": {
                      "label": "Magnesium",
                      "quantity": 151.09601266666667,
                      "unit": "%"
                  },
                  "K": {
                      "label": "Potassium",
                      "quantity": 109.04688801276596,
                      "unit": "%"
                  },
                  "FE": {
                      "label": "Iron",
                      "quantity": 81.47828484722223,
                      "unit": "%"
                  },
                  "ZN": {
                      "label": "Zinc",
                      "quantity": 148.37589543181818,
                      "unit": "%"
                  },
                  "P": {
                      "label": "Phosphorus",
                      "quantity": 437.2841782071429,
                      "unit": "%"
                  },
                  "VITA_RAE": {
                      "label": "Vitamin A",
                      "quantity": 201.54076996666666,
                      "unit": "%"
                  },
                  "VITC": {
                      "label": "Vitamin C",
                      "quantity": 78.62267746666669,
                      "unit": "%"
                  },
                  "THIA": {
                      "label": "Thiamin (B1)",
                      "quantity": 177.87116975833337,
                      "unit": "%"
                  },
                  "RIBF": {
                      "label": "Riboflavin (B2)",
                      "quantity": 195.70540551923077,
                      "unit": "%"
                  },
                  "NIA": {
                      "label": "Niacin (B3)",
                      "quantity": 682.855355859375,
                      "unit": "%"
                  },
                  "VITB6A": {
                      "label": "Vitamin B6",
                      "quantity": 709.3956163692308,
                      "unit": "%"
                  },
                  "FOLDFE": {
                      "label": "Folate equivalent (total)",
                      "quantity": 83.9106702375,
                      "unit": "%"
                  },
                  "VITB12": {
                      "label": "Vitamin B12",
                      "quantity": 83.3,
                      "unit": "%"
                  },
                  "VITD": {
                      "label": "Vitamin D",
                      "quantity": 0.0,
                      "unit": "%"
                  },
                  "TOCPHA": {
                      "label": "Vitamin E",
                      "quantity": 35.541333333333334,
                      "unit": "%"
                  },
                  "VITK1": {
                      "label": "Vitamin K",
                      "quantity": 0.0,
                      "unit": "%"
                  }
              },
              "digest": [
                  {
                      "label": "Fat",
                      "tag": "FAT",
                      "schemaOrgTag": "fatContent",
                      "total": 31.873420486,
                      "hasRDI": true,
                      "daily": 49.036031516923074,
                      "unit": "g",
                      "sub": [
                          {
                              "label": "Saturated",
                              "tag": "FASAT",
                              "schemaOrgTag": "saturatedFatContent",
                              "total": 6.9508407839,
                              "hasRDI": true,
                              "daily": 34.7542039195,
                              "unit": "g"
                          },
                          {
                              "label": "Trans",
                              "tag": "FATRN",
                              "schemaOrgTag": "transFatContent",
                              "total": 0.06664,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Monounsaturated",
                              "tag": "FAMS",
                              "schemaOrgTag": null,
                              "total": 7.82905045205,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Polyunsaturated",
                              "tag": "FAPU",
                              "schemaOrgTag": null,
                              "total": 6.54214310425,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          }
                      ]
                  },
                  {
                      "label": "Carbs",
                      "tag": "CHOCDF",
                      "schemaOrgTag": "carbohydrateContent",
                      "total": 555.757454925,
                      "hasRDI": true,
                      "daily": 185.25248497500002,
                      "unit": "g",
                      "sub": [
                          {
                              "label": "Carbs (net)",
                              "tag": "CHOCDF.net",
                              "schemaOrgTag": null,
                              "total": 528.5419127250001,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Fiber",
                              "tag": "FIBTG",
                              "schemaOrgTag": "fiberContent",
                              "total": 27.2155422,
                              "hasRDI": true,
                              "daily": 108.8621688,
                              "unit": "g"
                          },
                          {
                              "label": "Sugars",
                              "tag": "SUGAR",
                              "schemaOrgTag": "sugarContent",
                              "total": 0.0,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Sugars, added",
                              "tag": "SUGAR.added",
                              "schemaOrgTag": null,
                              "total": 0.0,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          }
                      ]
                  },
                  {
                      "label": "Protein",
                      "tag": "PROCNT",
                      "schemaOrgTag": "proteinContent",
                      "total": 275.5254388815,
                      "hasRDI": true,
                      "daily": 551.050877763,
                      "unit": "g"
                  },
                  {
                      "label": "Cholesterol",
                      "tag": "CHOLE",
                      "schemaOrgTag": "cholesterolContent",
                      "total": 694.9599999999999,
                      "hasRDI": true,
                      "daily": 231.65333333333328,
                      "unit": "mg"
                  },
                  {
                      "label": "Sodium",
                      "tag": "NA",
                      "schemaOrgTag": "sodiumContent",
                      "total": 754.0326208500001,
                      "hasRDI": true,
                      "daily": 31.418025868750004,
                      "unit": "mg"
                  },
                  {
                      "label": "Calcium",
                      "tag": "CA",
                      "schemaOrgTag": null,
                      "total": 270.34713875,
                      "hasRDI": true,
                      "daily": 27.034713875,
                      "unit": "mg"
                  },
                  {
                      "label": "Magnesium",
                      "tag": "MG",
                      "schemaOrgTag": null,
                      "total": 634.6032532,
                      "hasRDI": true,
                      "daily": 151.09601266666667,
                      "unit": "mg"
                  },
                  {
                      "label": "Potassium",
                      "tag": "K",
                      "schemaOrgTag": null,
                      "total": 5125.2037366,
                      "hasRDI": true,
                      "daily": 109.04688801276596,
                      "unit": "mg"
                  },
                  {
                      "label": "Iron",
                      "tag": "FE",
                      "schemaOrgTag": null,
                      "total": 14.6660912725,
                      "hasRDI": true,
                      "daily": 81.47828484722223,
                      "unit": "mg"
                  },
                  {
                      "label": "Zinc",
                      "tag": "ZN",
                      "schemaOrgTag": null,
                      "total": 16.3213484975,
                      "hasRDI": true,
                      "daily": 148.37589543181818,
                      "unit": "mg"
                  },
                  {
                      "label": "Phosphorus",
                      "tag": "P",
                      "schemaOrgTag": null,
                      "total": 3060.98924745,
                      "hasRDI": true,
                      "daily": 437.2841782071429,
                      "unit": "mg"
                  },
                  {
                      "label": "Vitamin A",
                      "tag": "VITA_RAE",
                      "schemaOrgTag": null,
                      "total": 1813.8669297000001,
                      "hasRDI": true,
                      "daily": 201.54076996666666,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin C",
                      "tag": "VITC",
                      "schemaOrgTag": null,
                      "total": 70.76040972000001,
                      "hasRDI": true,
                      "daily": 78.62267746666669,
                      "unit": "mg"
                  },
                  {
                      "label": "Thiamin (B1)",
                      "tag": "THIA",
                      "schemaOrgTag": null,
                      "total": 2.1344540371000003,
                      "hasRDI": true,
                      "daily": 177.87116975833337,
                      "unit": "mg"
                  },
                  {
                      "label": "Riboflavin (B2)",
                      "tag": "RIBF",
                      "schemaOrgTag": null,
                      "total": 2.54417027175,
                      "hasRDI": true,
                      "daily": 195.70540551923077,
                      "unit": "mg"
                  },
                  {
                      "label": "Niacin (B3)",
                      "tag": "NIA",
                      "schemaOrgTag": null,
                      "total": 109.2568569375,
                      "hasRDI": true,
                      "daily": 682.855355859375,
                      "unit": "mg"
                  },
                  {
                      "label": "Vitamin B6",
                      "tag": "VITB6A",
                      "schemaOrgTag": null,
                      "total": 9.2221430128,
                      "hasRDI": true,
                      "daily": 709.3956163692308,
                      "unit": "mg"
                  },
                  {
                      "label": "Folate equivalent (total)",
                      "tag": "FOLDFE",
                      "schemaOrgTag": null,
                      "total": 335.64268095,
                      "hasRDI": true,
                      "daily": 83.9106702375,
                      "unit": "µg"
                  },
                  {
                      "label": "Folate (food)",
                      "tag": "FOLFD",
                      "schemaOrgTag": null,
                      "total": 335.64268095,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Folic acid",
                      "tag": "FOLAC",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin B12",
                      "tag": "VITB12",
                      "schemaOrgTag": null,
                      "total": 1.9991999999999999,
                      "hasRDI": true,
                      "daily": 83.3,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin D",
                      "tag": "VITD",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": true,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin E",
                      "tag": "TOCPHA",
                      "schemaOrgTag": null,
                      "total": 5.3312,
                      "hasRDI": true,
                      "daily": 35.541333333333334,
                      "unit": "mg"
                  },
                  {
                      "label": "Vitamin K",
                      "tag": "VITK1",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": true,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Sugar alcohols",
                      "tag": "Sugar.alcohol",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "g"
                  },
                  {
                      "label": "Water",
                      "tag": "WATER",
                      "schemaOrgTag": null,
                      "total": 1337.592003655,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "g"
                  }
              ]
          },
          "_links": {
              "self": {
                  "href": "https://api.edamam.com/api/recipes/v2/b0ce19bb8c5ccfaa81f3ffedb5972fc7?type=public&app_id=ab54757d&app_key=b3218f5346afe1f35a7cb3650de96b38",
                  "title": "Self"
              }
          }
      },
      {
          "recipe": {
              "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b8c2be299e3ec576a901c415e1fb73ad",
              "label": "Oatmeal - Crockpot",
              "image": "https://edamam-product-images.s3.amazonaws.com/web-img/228/228b32c7adb1f7790c9d380844680547.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5873228b399bfa2bb735579082669ec260856aeb387d6ea52b63bcb1ef3d79e1",
              "images": {
                  "THUMBNAIL": {
                      "url": "https://edamam-product-images.s3.amazonaws.com/web-img/228/228b32c7adb1f7790c9d380844680547-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7174441e5ffa236bfbbfca5293676047b939b1d868cbc6d01c8c029867359a13",
                      "width": 100,
                      "height": 100
                  },
                  "SMALL": {
                      "url": "https://edamam-product-images.s3.amazonaws.com/web-img/228/228b32c7adb1f7790c9d380844680547-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7c762e3fc75eca4f9f07df3d9a584404db073a7783a170523dcf852a43b64a83",
                      "width": 200,
                      "height": 200
                  },
                  "REGULAR": {
                      "url": "https://edamam-product-images.s3.amazonaws.com/web-img/228/228b32c7adb1f7790c9d380844680547.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5873228b399bfa2bb735579082669ec260856aeb387d6ea52b63bcb1ef3d79e1",
                      "width": 300,
                      "height": 300
                  }
              },
              "source": "BigOven",
              "url": "http://www.bigoven.com/recipe/Oatmeal---Crockpot/155655",
              "shareAs": "http://www.edamam.com/recipe/oatmeal-crockpot-b8c2be299e3ec576a901c415e1fb73ad/-/low-sugar/high-fiber",
              "yield": 1.0,
              "dietLabels": [
                  "High-Fiber"
              ],
              "healthLabels": [
                  "Sugar-Conscious",
                  "Low Sugar",
                  "Vegan",
                  "Vegetarian",
                  "Pescatarian",
                  "Mediterranean",
                  "Dairy-Free",
                  "Gluten-Free",
                  "Wheat-Free",
                  "Egg-Free",
                  "Peanut-Free",
                  "Tree-Nut-Free",
                  "Soy-Free",
                  "Fish-Free",
                  "Shellfish-Free",
                  "Pork-Free",
                  "Red-Meat-Free",
                  "Crustacean-Free",
                  "Celery-Free",
                  "Mustard-Free",
                  "Sesame-Free",
                  "Lupine-Free",
                  "Mollusk-Free",
                  "Alcohol-Free",
                  "No oil added",
                  "Sulfite-Free",
                  "FODMAP-Free",
                  "Kosher",
                  "Immuno-Supportive"
              ],
              "cautions": [
                  "Gluten",
                  "Wheat"
              ],
              "ingredientLines": [
                  "1/4 ts salt",
                  "1 c oats",
                  "2 1/2 c water"
              ],
              "ingredients": [
                  {
                      "text": "1/4 ts salt",
                      "quantity": 0.25,
                      "measure": "teaspoon",
                      "food": "salt",
                      "weight": 1.5,
                      "foodCategory": "Condiments and sauces",
                      "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                      "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                  },
                  {
                      "text": "1 c oats",
                      "quantity": 1.0,
                      "measure": "cup",
                      "food": "oats",
                      "weight": 156.0,
                      "foodCategory": "grains",
                      "foodId": "food_bbx4dfgbzjecp8bkewhz5b1lp5ky",
                      "image": "https://www.edamam.com/food-img/c3a/c3a47df1c9be12cb3d9091a841d37680.jpg"
                  },
                  {
                      "text": "2 1/2 c water",
                      "quantity": 2.5,
                      "measure": "cup",
                      "food": "water",
                      "weight": 591.47059125,
                      "foodCategory": "water",
                      "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                      "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                  }
              ],
              "calories": 606.84,
              "totalCO2Emissions": 65.274999948,
              "co2EmissionsClass": "A",
              "totalWeight": 748.97059125,
              "totalTime": 60.0,
              "cuisineType": [
                  "american"
              ],
              "mealType": [
                  "lunch/dinner"
              ],
              "dishType": [
                  "main course"
              ],
              "totalNutrients": {
                  "ENERC_KCAL": {
                      "label": "Energy",
                      "quantity": 606.84,
                      "unit": "kcal"
                  },
                  "FAT": {
                      "label": "Fat",
                      "quantity": 10.764000000000001,
                      "unit": "g"
                  },
                  "FASAT": {
                      "label": "Saturated",
                      "quantity": 1.9032,
                      "unit": "g"
                  },
                  "FATRN": {
                      "label": "Trans",
                      "quantity": 0.0,
                      "unit": "g"
                  },
                  "FAMS": {
                      "label": "Monounsaturated",
                      "quantity": 3.4008000000000003,
                      "unit": "g"
                  },
                  "FAPU": {
                      "label": "Polyunsaturated",
                      "quantity": 3.9624,
                      "unit": "g"
                  },
                  "CHOCDF": {
                      "label": "Carbs",
                      "quantity": 103.428,
                      "unit": "g"
                  },
                  "CHOCDF.net": {
                      "label": "Carbohydrates (net)",
                      "quantity": 86.892,
                      "unit": "g"
                  },
                  "FIBTG": {
                      "label": "Fiber",
                      "quantity": 16.536,
                      "unit": "g"
                  },
                  "SUGAR": {
                      "label": "Sugars",
                      "quantity": 0.0,
                      "unit": "g"
                  },
                  "PROCNT": {
                      "label": "Protein",
                      "quantity": 26.363999999999997,
                      "unit": "g"
                  },
                  "CHOLE": {
                      "label": "Cholesterol",
                      "quantity": 0.0,
                      "unit": "mg"
                  },
                  "NA": {
                      "label": "Sodium",
                      "quantity": 608.77882365,
                      "unit": "mg"
                  },
                  "CA": {
                      "label": "Calcium",
                      "quantity": 102.3441177375,
                      "unit": "mg"
                  },
                  "MG": {
                      "label": "Magnesium",
                      "quantity": 282.0497059125,
                      "unit": "mg"
                  },
                  "K": {
                      "label": "Potassium",
                      "quantity": 669.36,
                      "unit": "mg"
                  },
                  "FE": {
                      "label": "Iron",
                      "quantity": 7.36815,
                      "unit": "mg"
                  },
                  "ZN": {
                      "label": "Zinc",
                      "quantity": 6.253847059125001,
                      "unit": "mg"
                  },
                  "P": {
                      "label": "Phosphorus",
                      "quantity": 815.88,
                      "unit": "mg"
                  },
                  "VITA_RAE": {
                      "label": "Vitamin A",
                      "quantity": 0.0,
                      "unit": "µg"
                  },
                  "VITC": {
                      "label": "Vitamin C",
                      "quantity": 0.0,
                      "unit": "mg"
                  },
                  "THIA": {
                      "label": "Thiamin (B1)",
                      "quantity": 1.19028,
                      "unit": "mg"
                  },
                  "RIBF": {
                      "label": "Riboflavin (B2)",
                      "quantity": 0.21684000000000003,
                      "unit": "mg"
                  },
                  "NIA": {
                      "label": "Niacin (B3)",
                      "quantity": 1.49916,
                      "unit": "mg"
                  },
                  "VITB6A": {
                      "label": "Vitamin B6",
                      "quantity": 0.18564,
                      "unit": "mg"
                  },
                  "FOLDFE": {
                      "label": "Folate equivalent (total)",
                      "quantity": 87.36,
                      "unit": "µg"
                  },
                  "FOLFD": {
                      "label": "Folate (food)",
                      "quantity": 87.36,
                      "unit": "µg"
                  },
                  "FOLAC": {
                      "label": "Folic acid",
                      "quantity": 0.0,
                      "unit": "µg"
                  },
                  "VITB12": {
                      "label": "Vitamin B12",
                      "quantity": 0.0,
                      "unit": "µg"
                  },
                  "VITD": {
                      "label": "Vitamin D",
                      "quantity": 0.0,
                      "unit": "µg"
                  },
                  "TOCPHA": {
                      "label": "Vitamin E",
                      "quantity": 0.0,
                      "unit": "mg"
                  },
                  "VITK1": {
                      "label": "Vitamin K",
                      "quantity": 0.0,
                      "unit": "µg"
                  },
                  "WATER": {
                      "label": "Water",
                      "quantity": 603.70532065875,
                      "unit": "g"
                  }
              },
              "totalDaily": {
                  "ENERC_KCAL": {
                      "label": "Energy",
                      "quantity": 30.342,
                      "unit": "%"
                  },
                  "FAT": {
                      "label": "Fat",
                      "quantity": 16.560000000000002,
                      "unit": "%"
                  },
                  "FASAT": {
                      "label": "Saturated",
                      "quantity": 9.516,
                      "unit": "%"
                  },
                  "CHOCDF": {
                      "label": "Carbs",
                      "quantity": 34.476,
                      "unit": "%"
                  },
                  "FIBTG": {
                      "label": "Fiber",
                      "quantity": 66.144,
                      "unit": "%"
                  },
                  "PROCNT": {
                      "label": "Protein",
                      "quantity": 52.727999999999994,
                      "unit": "%"
                  },
                  "CHOLE": {
                      "label": "Cholesterol",
                      "quantity": 0.0,
                      "unit": "%"
                  },
                  "NA": {
                      "label": "Sodium",
                      "quantity": 25.365784318750002,
                      "unit": "%"
                  },
                  "CA": {
                      "label": "Calcium",
                      "quantity": 10.23441177375,
                      "unit": "%"
                  },
                  "MG": {
                      "label": "Magnesium",
                      "quantity": 67.15469188392856,
                      "unit": "%"
                  },
                  "K": {
                      "label": "Potassium",
                      "quantity": 14.241702127659574,
                      "unit": "%"
                  },
                  "FE": {
                      "label": "Iron",
                      "quantity": 40.93416666666667,
                      "unit": "%"
                  },
                  "ZN": {
                      "label": "Zinc",
                      "quantity": 56.853155082954565,
                      "unit": "%"
                  },
                  "P": {
                      "label": "Phosphorus",
                      "quantity": 116.55428571428571,
                      "unit": "%"
                  },
                  "VITA_RAE": {
                      "label": "Vitamin A",
                      "quantity": 0.0,
                      "unit": "%"
                  },
                  "VITC": {
                      "label": "Vitamin C",
                      "quantity": 0.0,
                      "unit": "%"
                  },
                  "THIA": {
                      "label": "Thiamin (B1)",
                      "quantity": 99.19000000000001,
                      "unit": "%"
                  },
                  "RIBF": {
                      "label": "Riboflavin (B2)",
                      "quantity": 16.680000000000003,
                      "unit": "%"
                  },
                  "NIA": {
                      "label": "Niacin (B3)",
                      "quantity": 9.36975,
                      "unit": "%"
                  },
                  "VITB6A": {
                      "label": "Vitamin B6",
                      "quantity": 14.28,
                      "unit": "%"
                  },
                  "FOLDFE": {
                      "label": "Folate equivalent (total)",
                      "quantity": 21.84,
                      "unit": "%"
                  },
                  "VITB12": {
                      "label": "Vitamin B12",
                      "quantity": 0.0,
                      "unit": "%"
                  },
                  "VITD": {
                      "label": "Vitamin D",
                      "quantity": 0.0,
                      "unit": "%"
                  },
                  "TOCPHA": {
                      "label": "Vitamin E",
                      "quantity": 0.0,
                      "unit": "%"
                  },
                  "VITK1": {
                      "label": "Vitamin K",
                      "quantity": 0.0,
                      "unit": "%"
                  }
              },
              "digest": [
                  {
                      "label": "Fat",
                      "tag": "FAT",
                      "schemaOrgTag": "fatContent",
                      "total": 10.764000000000001,
                      "hasRDI": true,
                      "daily": 16.560000000000002,
                      "unit": "g",
                      "sub": [
                          {
                              "label": "Saturated",
                              "tag": "FASAT",
                              "schemaOrgTag": "saturatedFatContent",
                              "total": 1.9032,
                              "hasRDI": true,
                              "daily": 9.516,
                              "unit": "g"
                          },
                          {
                              "label": "Trans",
                              "tag": "FATRN",
                              "schemaOrgTag": "transFatContent",
                              "total": 0.0,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Monounsaturated",
                              "tag": "FAMS",
                              "schemaOrgTag": null,
                              "total": 3.4008000000000003,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Polyunsaturated",
                              "tag": "FAPU",
                              "schemaOrgTag": null,
                              "total": 3.9624,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          }
                      ]
                  },
                  {
                      "label": "Carbs",
                      "tag": "CHOCDF",
                      "schemaOrgTag": "carbohydrateContent",
                      "total": 103.428,
                      "hasRDI": true,
                      "daily": 34.476,
                      "unit": "g",
                      "sub": [
                          {
                              "label": "Carbs (net)",
                              "tag": "CHOCDF.net",
                              "schemaOrgTag": null,
                              "total": 86.892,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Fiber",
                              "tag": "FIBTG",
                              "schemaOrgTag": "fiberContent",
                              "total": 16.536,
                              "hasRDI": true,
                              "daily": 66.144,
                              "unit": "g"
                          },
                          {
                              "label": "Sugars",
                              "tag": "SUGAR",
                              "schemaOrgTag": "sugarContent",
                              "total": 0.0,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Sugars, added",
                              "tag": "SUGAR.added",
                              "schemaOrgTag": null,
                              "total": 0.0,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          }
                      ]
                  },
                  {
                      "label": "Protein",
                      "tag": "PROCNT",
                      "schemaOrgTag": "proteinContent",
                      "total": 26.363999999999997,
                      "hasRDI": true,
                      "daily": 52.727999999999994,
                      "unit": "g"
                  },
                  {
                      "label": "Cholesterol",
                      "tag": "CHOLE",
                      "schemaOrgTag": "cholesterolContent",
                      "total": 0.0,
                      "hasRDI": true,
                      "daily": 0.0,
                      "unit": "mg"
                  },
                  {
                      "label": "Sodium",
                      "tag": "NA",
                      "schemaOrgTag": "sodiumContent",
                      "total": 608.77882365,
                      "hasRDI": true,
                      "daily": 25.365784318750002,
                      "unit": "mg"
                  },
                  {
                      "label": "Calcium",
                      "tag": "CA",
                      "schemaOrgTag": null,
                      "total": 102.3441177375,
                      "hasRDI": true,
                      "daily": 10.23441177375,
                      "unit": "mg"
                  },
                  {
                      "label": "Magnesium",
                      "tag": "MG",
                      "schemaOrgTag": null,
                      "total": 282.0497059125,
                      "hasRDI": true,
                      "daily": 67.15469188392856,
                      "unit": "mg"
                  },
                  {
                      "label": "Potassium",
                      "tag": "K",
                      "schemaOrgTag": null,
                      "total": 669.36,
                      "hasRDI": true,
                      "daily": 14.241702127659574,
                      "unit": "mg"
                  },
                  {
                      "label": "Iron",
                      "tag": "FE",
                      "schemaOrgTag": null,
                      "total": 7.36815,
                      "hasRDI": true,
                      "daily": 40.93416666666667,
                      "unit": "mg"
                  },
                  {
                      "label": "Zinc",
                      "tag": "ZN",
                      "schemaOrgTag": null,
                      "total": 6.253847059125001,
                      "hasRDI": true,
                      "daily": 56.853155082954565,
                      "unit": "mg"
                  },
                  {
                      "label": "Phosphorus",
                      "tag": "P",
                      "schemaOrgTag": null,
                      "total": 815.88,
                      "hasRDI": true,
                      "daily": 116.55428571428571,
                      "unit": "mg"
                  },
                  {
                      "label": "Vitamin A",
                      "tag": "VITA_RAE",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": true,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin C",
                      "tag": "VITC",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": true,
                      "daily": 0.0,
                      "unit": "mg"
                  },
                  {
                      "label": "Thiamin (B1)",
                      "tag": "THIA",
                      "schemaOrgTag": null,
                      "total": 1.19028,
                      "hasRDI": true,
                      "daily": 99.19000000000001,
                      "unit": "mg"
                  },
                  {
                      "label": "Riboflavin (B2)",
                      "tag": "RIBF",
                      "schemaOrgTag": null,
                      "total": 0.21684000000000003,
                      "hasRDI": true,
                      "daily": 16.680000000000003,
                      "unit": "mg"
                  },
                  {
                      "label": "Niacin (B3)",
                      "tag": "NIA",
                      "schemaOrgTag": null,
                      "total": 1.49916,
                      "hasRDI": true,
                      "daily": 9.36975,
                      "unit": "mg"
                  },
                  {
                      "label": "Vitamin B6",
                      "tag": "VITB6A",
                      "schemaOrgTag": null,
                      "total": 0.18564,
                      "hasRDI": true,
                      "daily": 14.28,
                      "unit": "mg"
                  },
                  {
                      "label": "Folate equivalent (total)",
                      "tag": "FOLDFE",
                      "schemaOrgTag": null,
                      "total": 87.36,
                      "hasRDI": true,
                      "daily": 21.84,
                      "unit": "µg"
                  },
                  {
                      "label": "Folate (food)",
                      "tag": "FOLFD",
                      "schemaOrgTag": null,
                      "total": 87.36,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Folic acid",
                      "tag": "FOLAC",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin B12",
                      "tag": "VITB12",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": true,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin D",
                      "tag": "VITD",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": true,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin E",
                      "tag": "TOCPHA",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": true,
                      "daily": 0.0,
                      "unit": "mg"
                  },
                  {
                      "label": "Vitamin K",
                      "tag": "VITK1",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": true,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Sugar alcohols",
                      "tag": "Sugar.alcohol",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "g"
                  },
                  {
                      "label": "Water",
                      "tag": "WATER",
                      "schemaOrgTag": null,
                      "total": 603.70532065875,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "g"
                  }
              ]
          },
          "_links": {
              "self": {
                  "href": "https://api.edamam.com/api/recipes/v2/b8c2be299e3ec576a901c415e1fb73ad?type=public&app_id=ab54757d&app_key=b3218f5346afe1f35a7cb3650de96b38",
                  "title": "Self"
              }
          }
      },
      {
          "recipe": {
              "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b52bcd6bf10506ef9e74da8fb60d87d0",
              "label": "Yellow Squash In Dipping Oil Recipe 4",
              "image": "https://edamam-product-images.s3.amazonaws.com/web-img/2e9/2e9ccde2e4c7c4c3ddc6ef6d122f8983.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3230a895f865ecb349f7b1219350f9c2219d654c937c41921dae6e36707c528e",
              "images": {
                  "THUMBNAIL": {
                      "url": "https://edamam-product-images.s3.amazonaws.com/web-img/2e9/2e9ccde2e4c7c4c3ddc6ef6d122f8983-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3c8bc669b9dafb13b78752c800c16773a21e5305ff51ce3e41c81c502ecb9ae0",
                      "width": 100,
                      "height": 100
                  },
                  "SMALL": {
                      "url": "https://edamam-product-images.s3.amazonaws.com/web-img/2e9/2e9ccde2e4c7c4c3ddc6ef6d122f8983-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b1590ceaf815771ff138418df6330f5363bedac22f5871ccafa67ba47a2af632",
                      "width": 200,
                      "height": 200
                  },
                  "REGULAR": {
                      "url": "https://edamam-product-images.s3.amazonaws.com/web-img/2e9/2e9ccde2e4c7c4c3ddc6ef6d122f8983.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3230a895f865ecb349f7b1219350f9c2219d654c937c41921dae6e36707c528e",
                      "width": 300,
                      "height": 300
                  }
              },
              "source": "food.com",
              "url": "http://www.food.com/recipe/yellow-squash-in-dipping-oil-130780",
              "shareAs": "http://www.edamam.com/recipe/yellow-squash-in-dipping-oil-recipe-4-b52bcd6bf10506ef9e74da8fb60d87d0/-/low-sugar/high-fiber",
              "yield": 4.0,
              "dietLabels": [
                  "High-Fiber",
                  "Low-Sodium"
              ],
              "healthLabels": [
                  "Sugar-Conscious",
                  "Low Sugar",
                  "Vegan",
                  "Vegetarian",
                  "Pescatarian",
                  "Mediterranean",
                  "Dairy-Free",
                  "Gluten-Free",
                  "Wheat-Free",
                  "Egg-Free",
                  "Peanut-Free",
                  "Tree-Nut-Free",
                  "Soy-Free",
                  "Fish-Free",
                  "Shellfish-Free",
                  "Pork-Free",
                  "Red-Meat-Free",
                  "Crustacean-Free",
                  "Celery-Free",
                  "Mustard-Free",
                  "Sesame-Free",
                  "Lupine-Free",
                  "Mollusk-Free",
                  "Alcohol-Free",
                  "Sulfite-Free",
                  "FODMAP-Free",
                  "Kosher"
              ],
              "cautions": [],
              "ingredientLines": [
                  "2 -3 tablespoons olive oil (hey jude's dipping oil recipe #81891)",
                  "3 -4 yellow squash, sliced 1/4-inch thick"
              ],
              "ingredients": [
                  {
                      "text": "2 -3 tablespoons olive oil (hey jude's dipping oil recipe #81891)",
                      "quantity": 2.5,
                      "measure": "tablespoon",
                      "food": "olive oil",
                      "weight": 33.75,
                      "foodCategory": "Oils",
                      "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                      "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                  },
                  {
                      "text": "3 -4 yellow squash, sliced 1/4-inch thick",
                      "quantity": 3.5,
                      "measure": "<unit>",
                      "food": "squash",
                      "weight": 1508.5,
                      "foodCategory": "vegetables",
                      "foodId": "food_b1a90x2by6m8pnbsdfxnmascz2tc",
                      "image": "https://www.edamam.com/food-img/f90/f903abb8694c9e918040fbd7fb776c4f.jpg"
                  }
              ],
              "calories": 901.7500000000001,
              "totalCO2Emissions": 1000.521483515,
              "co2EmissionsClass": "C",
              "totalWeight": 1542.25,
              "totalTime": 15.0,
              "cuisineType": [
                  "italian"
              ],
              "mealType": [
                  "lunch/dinner"
              ],
              "dishType": [
                  "main course"
              ],
              "totalNutrients": {
                  "ENERC_KCAL": {
                      "label": "Energy",
                      "quantity": 901.7500000000001,
                      "unit": "kcal"
                  },
                  "FAT": {
                      "label": "Fat",
                      "quantity": 35.2585,
                      "unit": "g"
                  },
                  "FASAT": {
                      "label": "Saturated",
                      "quantity": 4.974285000000001,
                      "unit": "g"
                  },
                  "FATRN": {
                      "label": "Trans",
                      "quantity": 0.0,
                      "unit": "g"
                  },
                  "FAMS": {
                      "label": "Monounsaturated",
                      "quantity": 24.743095000000004,
                      "unit": "g"
                  },
                  "FAPU": {
                      "label": "Polyunsaturated",
                      "quantity": 4.17732,
                      "unit": "g"
                  },
                  "CHOCDF": {
                      "label": "Carbs",
                      "quantity": 156.88400000000001,
                      "unit": "g"
                  },
                  "CHOCDF.net": {
                      "label": "Carbohydrates (net)",
                      "quantity": 134.25650000000002,
                      "unit": "g"
                  },
                  "FIBTG": {
                      "label": "Fiber",
                      "quantity": 22.6275,
                      "unit": "g"
                  },
                  "SUGAR": {
                      "label": "Sugars",
                      "quantity": 0.0,
                      "unit": "g"
                  },
                  "PROCNT": {
                      "label": "Protein",
                      "quantity": 12.068000000000001,
                      "unit": "g"
                  },
                  "CHOLE": {
                      "label": "Cholesterol",
                      "quantity": 0.0,
                      "unit": "mg"
                  },
                  "NA": {
                      "label": "Sodium",
                      "quantity": 45.93,
                      "unit": "mg"
                  },
                  "CA": {
                      "label": "Calcium",
                      "quantity": 498.1425,
                      "unit": "mg"
                  },
                  "MG": {
                      "label": "Magnesium",
                      "quantity": 482.72,
                      "unit": "mg"
                  },
                  "K": {
                      "label": "Potassium",
                      "quantity": 5234.8324999999995,
                      "unit": "mg"
                  },
                  "FE": {
                      "label": "Iron",
                      "quantity": 10.7485,
                      "unit": "mg"
                  },
                  "ZN": {
                      "label": "Zinc",
                      "quantity": 1.9610500000000002,
                      "unit": "mg"
                  },
                  "P": {
                      "label": "Phosphorus",
                      "quantity": 543.0600000000001,
                      "unit": "mg"
                  },
                  "VITA_RAE": {
                      "label": "Vitamin A",
                      "quantity": 271.53000000000003,
                      "unit": "µg"
                  },
                  "VITC": {
                      "label": "Vitamin C",
                      "quantity": 165.935,
                      "unit": "mg"
                  },
                  "THIA": {
                      "label": "Thiamin (B1)",
                      "quantity": 2.1119000000000003,
                      "unit": "mg"
                  },
                  "RIBF": {
                      "label": "Riboflavin (B2)",
                      "quantity": 0.15085,
                      "unit": "mg"
                  },
                  "NIA": {
                      "label": "Niacin (B3)",
                      "quantity": 10.5595,
                      "unit": "mg"
                  },
                  "VITB6A": {
                      "label": "Vitamin B6",
                      "quantity": 2.32309,
                      "unit": "mg"
                  },
                  "FOLDFE": {
                      "label": "Folate equivalent (total)",
                      "quantity": 256.445,
                      "unit": "µg"
                  },
                  "FOLFD": {
                      "label": "Folate (food)",
                      "quantity": 256.445,
                      "unit": "µg"
                  },
                  "FOLAC": {
                      "label": "Folic acid",
                      "quantity": 0.0,
                      "unit": "µg"
                  },
                  "VITB12": {
                      "label": "Vitamin B12",
                      "quantity": 0.0,
                      "unit": "µg"
                  },
                  "VITD": {
                      "label": "Vitamin D",
                      "quantity": 0.0,
                      "unit": "µg"
                  },
                  "TOCPHA": {
                      "label": "Vitamin E",
                      "quantity": 4.86,
                      "unit": "mg"
                  },
                  "VITK1": {
                      "label": "Vitamin K",
                      "quantity": 20.317500000000003,
                      "unit": "µg"
                  },
                  "WATER": {
                      "label": "Water",
                      "quantity": 1324.463,
                      "unit": "g"
                  }
              },
              "totalDaily": {
                  "ENERC_KCAL": {
                      "label": "Energy",
                      "quantity": 45.087500000000006,
                      "unit": "%"
                  },
                  "FAT": {
                      "label": "Fat",
                      "quantity": 54.24384615384615,
                      "unit": "%"
                  },
                  "FASAT": {
                      "label": "Saturated",
                      "quantity": 24.871425000000006,
                      "unit": "%"
                  },
                  "CHOCDF": {
                      "label": "Carbs",
                      "quantity": 52.29466666666667,
                      "unit": "%"
                  },
                  "FIBTG": {
                      "label": "Fiber",
                      "quantity": 90.51,
                      "unit": "%"
                  },
                  "PROCNT": {
                      "label": "Protein",
                      "quantity": 24.136000000000003,
                      "unit": "%"
                  },
                  "CHOLE": {
                      "label": "Cholesterol",
                      "quantity": 0.0,
                      "unit": "%"
                  },
                  "NA": {
                      "label": "Sodium",
                      "quantity": 1.91375,
                      "unit": "%"
                  },
                  "CA": {
                      "label": "Calcium",
                      "quantity": 49.81425,
                      "unit": "%"
                  },
                  "MG": {
                      "label": "Magnesium",
                      "quantity": 114.93333333333334,
                      "unit": "%"
                  },
                  "K": {
                      "label": "Potassium",
                      "quantity": 111.37941489361701,
                      "unit": "%"
                  },
                  "FE": {
                      "label": "Iron",
                      "quantity": 59.71388888888888,
                      "unit": "%"
                  },
                  "ZN": {
                      "label": "Zinc",
                      "quantity": 17.827727272727273,
                      "unit": "%"
                  },
                  "P": {
                      "label": "Phosphorus",
                      "quantity": 77.58000000000001,
                      "unit": "%"
                  },
                  "VITA_RAE": {
                      "label": "Vitamin A",
                      "quantity": 30.170000000000005,
                      "unit": "%"
                  },
                  "VITC": {
                      "label": "Vitamin C",
                      "quantity": 184.37222222222223,
                      "unit": "%"
                  },
                  "THIA": {
                      "label": "Thiamin (B1)",
                      "quantity": 175.9916666666667,
                      "unit": "%"
                  },
                  "RIBF": {
                      "label": "Riboflavin (B2)",
                      "quantity": 11.603846153846154,
                      "unit": "%"
                  },
                  "NIA": {
                      "label": "Niacin (B3)",
                      "quantity": 65.996875,
                      "unit": "%"
                  },
                  "VITB6A": {
                      "label": "Vitamin B6",
                      "quantity": 178.69923076923075,
                      "unit": "%"
                  },
                  "FOLDFE": {
                      "label": "Folate equivalent (total)",
                      "quantity": 64.11125,
                      "unit": "%"
                  },
                  "VITB12": {
                      "label": "Vitamin B12",
                      "quantity": 0.0,
                      "unit": "%"
                  },
                  "VITD": {
                      "label": "Vitamin D",
                      "quantity": 0.0,
                      "unit": "%"
                  },
                  "TOCPHA": {
                      "label": "Vitamin E",
                      "quantity": 32.400000000000006,
                      "unit": "%"
                  },
                  "VITK1": {
                      "label": "Vitamin K",
                      "quantity": 16.931250000000002,
                      "unit": "%"
                  }
              },
              "digest": [
                  {
                      "label": "Fat",
                      "tag": "FAT",
                      "schemaOrgTag": "fatContent",
                      "total": 35.2585,
                      "hasRDI": true,
                      "daily": 54.24384615384615,
                      "unit": "g",
                      "sub": [
                          {
                              "label": "Saturated",
                              "tag": "FASAT",
                              "schemaOrgTag": "saturatedFatContent",
                              "total": 4.974285000000001,
                              "hasRDI": true,
                              "daily": 24.871425000000006,
                              "unit": "g"
                          },
                          {
                              "label": "Trans",
                              "tag": "FATRN",
                              "schemaOrgTag": "transFatContent",
                              "total": 0.0,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Monounsaturated",
                              "tag": "FAMS",
                              "schemaOrgTag": null,
                              "total": 24.743095000000004,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Polyunsaturated",
                              "tag": "FAPU",
                              "schemaOrgTag": null,
                              "total": 4.17732,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          }
                      ]
                  },
                  {
                      "label": "Carbs",
                      "tag": "CHOCDF",
                      "schemaOrgTag": "carbohydrateContent",
                      "total": 156.88400000000001,
                      "hasRDI": true,
                      "daily": 52.29466666666667,
                      "unit": "g",
                      "sub": [
                          {
                              "label": "Carbs (net)",
                              "tag": "CHOCDF.net",
                              "schemaOrgTag": null,
                              "total": 134.25650000000002,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Fiber",
                              "tag": "FIBTG",
                              "schemaOrgTag": "fiberContent",
                              "total": 22.6275,
                              "hasRDI": true,
                              "daily": 90.51,
                              "unit": "g"
                          },
                          {
                              "label": "Sugars",
                              "tag": "SUGAR",
                              "schemaOrgTag": "sugarContent",
                              "total": 0.0,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Sugars, added",
                              "tag": "SUGAR.added",
                              "schemaOrgTag": null,
                              "total": 0.0,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          }
                      ]
                  },
                  {
                      "label": "Protein",
                      "tag": "PROCNT",
                      "schemaOrgTag": "proteinContent",
                      "total": 12.068000000000001,
                      "hasRDI": true,
                      "daily": 24.136000000000003,
                      "unit": "g"
                  },
                  {
                      "label": "Cholesterol",
                      "tag": "CHOLE",
                      "schemaOrgTag": "cholesterolContent",
                      "total": 0.0,
                      "hasRDI": true,
                      "daily": 0.0,
                      "unit": "mg"
                  },
                  {
                      "label": "Sodium",
                      "tag": "NA",
                      "schemaOrgTag": "sodiumContent",
                      "total": 45.93,
                      "hasRDI": true,
                      "daily": 1.91375,
                      "unit": "mg"
                  },
                  {
                      "label": "Calcium",
                      "tag": "CA",
                      "schemaOrgTag": null,
                      "total": 498.1425,
                      "hasRDI": true,
                      "daily": 49.81425,
                      "unit": "mg"
                  },
                  {
                      "label": "Magnesium",
                      "tag": "MG",
                      "schemaOrgTag": null,
                      "total": 482.72,
                      "hasRDI": true,
                      "daily": 114.93333333333334,
                      "unit": "mg"
                  },
                  {
                      "label": "Potassium",
                      "tag": "K",
                      "schemaOrgTag": null,
                      "total": 5234.8324999999995,
                      "hasRDI": true,
                      "daily": 111.37941489361701,
                      "unit": "mg"
                  },
                  {
                      "label": "Iron",
                      "tag": "FE",
                      "schemaOrgTag": null,
                      "total": 10.7485,
                      "hasRDI": true,
                      "daily": 59.71388888888888,
                      "unit": "mg"
                  },
                  {
                      "label": "Zinc",
                      "tag": "ZN",
                      "schemaOrgTag": null,
                      "total": 1.9610500000000002,
                      "hasRDI": true,
                      "daily": 17.827727272727273,
                      "unit": "mg"
                  },
                  {
                      "label": "Phosphorus",
                      "tag": "P",
                      "schemaOrgTag": null,
                      "total": 543.0600000000001,
                      "hasRDI": true,
                      "daily": 77.58000000000001,
                      "unit": "mg"
                  },
                  {
                      "label": "Vitamin A",
                      "tag": "VITA_RAE",
                      "schemaOrgTag": null,
                      "total": 271.53000000000003,
                      "hasRDI": true,
                      "daily": 30.170000000000005,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin C",
                      "tag": "VITC",
                      "schemaOrgTag": null,
                      "total": 165.935,
                      "hasRDI": true,
                      "daily": 184.37222222222223,
                      "unit": "mg"
                  },
                  {
                      "label": "Thiamin (B1)",
                      "tag": "THIA",
                      "schemaOrgTag": null,
                      "total": 2.1119000000000003,
                      "hasRDI": true,
                      "daily": 175.9916666666667,
                      "unit": "mg"
                  },
                  {
                      "label": "Riboflavin (B2)",
                      "tag": "RIBF",
                      "schemaOrgTag": null,
                      "total": 0.15085,
                      "hasRDI": true,
                      "daily": 11.603846153846154,
                      "unit": "mg"
                  },
                  {
                      "label": "Niacin (B3)",
                      "tag": "NIA",
                      "schemaOrgTag": null,
                      "total": 10.5595,
                      "hasRDI": true,
                      "daily": 65.996875,
                      "unit": "mg"
                  },
                  {
                      "label": "Vitamin B6",
                      "tag": "VITB6A",
                      "schemaOrgTag": null,
                      "total": 2.32309,
                      "hasRDI": true,
                      "daily": 178.69923076923075,
                      "unit": "mg"
                  },
                  {
                      "label": "Folate equivalent (total)",
                      "tag": "FOLDFE",
                      "schemaOrgTag": null,
                      "total": 256.445,
                      "hasRDI": true,
                      "daily": 64.11125,
                      "unit": "µg"
                  },
                  {
                      "label": "Folate (food)",
                      "tag": "FOLFD",
                      "schemaOrgTag": null,
                      "total": 256.445,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Folic acid",
                      "tag": "FOLAC",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin B12",
                      "tag": "VITB12",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": true,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin D",
                      "tag": "VITD",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": true,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin E",
                      "tag": "TOCPHA",
                      "schemaOrgTag": null,
                      "total": 4.86,
                      "hasRDI": true,
                      "daily": 32.400000000000006,
                      "unit": "mg"
                  },
                  {
                      "label": "Vitamin K",
                      "tag": "VITK1",
                      "schemaOrgTag": null,
                      "total": 20.317500000000003,
                      "hasRDI": true,
                      "daily": 16.931250000000002,
                      "unit": "µg"
                  },
                  {
                      "label": "Sugar alcohols",
                      "tag": "Sugar.alcohol",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "g"
                  },
                  {
                      "label": "Water",
                      "tag": "WATER",
                      "schemaOrgTag": null,
                      "total": 1324.463,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "g"
                  }
              ]
          },
          "_links": {
              "self": {
                  "href": "https://api.edamam.com/api/recipes/v2/b52bcd6bf10506ef9e74da8fb60d87d0?type=public&app_id=ab54757d&app_key=b3218f5346afe1f35a7cb3650de96b38",
                  "title": "Self"
              }
          }
      },
      {
          "recipe": {
              "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_4dcd63b12822e541d70332bfc93fd77b",
              "label": "Simply Squash recipes",
              "image": "https://edamam-product-images.s3.amazonaws.com/web-img/7a4/7a4ee5dad40b24e6091f37d8436f3ae0?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e82a5555898d52f5e60cb4e12b734da50d4084adf5c6b089df87a5356fc1b528",
              "images": {
                  "THUMBNAIL": {
                      "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7a4/7a4ee5dad40b24e6091f37d8436f3ae0-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=668f5273889501294969f7e1da2eff6f38b098528e164960f669182c993862c9",
                      "width": 100,
                      "height": 100
                  },
                  "SMALL": {
                      "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7a4/7a4ee5dad40b24e6091f37d8436f3ae0-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c790d030bcc2e442b77fb66d4facb7d9b1dd84bc8e0358906ff3f5a474479b90",
                      "width": 200,
                      "height": 200
                  },
                  "REGULAR": {
                      "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7a4/7a4ee5dad40b24e6091f37d8436f3ae0?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e82a5555898d52f5e60cb4e12b734da50d4084adf5c6b089df87a5356fc1b528",
                      "width": 300,
                      "height": 300
                  }
              },
              "source": "cuisinicity.com",
              "url": "http://cuisinicity.com/simply-squash/",
              "shareAs": "http://www.edamam.com/recipe/simply-squash-recipes-4dcd63b12822e541d70332bfc93fd77b/-/low-sugar/high-fiber",
              "yield": 4.0,
              "dietLabels": [
                  "High-Fiber"
              ],
              "healthLabels": [
                  "Sugar-Conscious",
                  "Low Sugar",
                  "Vegan",
                  "Vegetarian",
                  "Pescatarian",
                  "Paleo",
                  "Mediterranean",
                  "DASH",
                  "Dairy-Free",
                  "Gluten-Free",
                  "Wheat-Free",
                  "Egg-Free",
                  "Peanut-Free",
                  "Tree-Nut-Free",
                  "Soy-Free",
                  "Fish-Free",
                  "Shellfish-Free",
                  "Pork-Free",
                  "Red-Meat-Free",
                  "Crustacean-Free",
                  "Celery-Free",
                  "Mustard-Free",
                  "Sesame-Free",
                  "Lupine-Free",
                  "Mollusk-Free",
                  "Alcohol-Free",
                  "Sulfite-Free",
                  "FODMAP-Free",
                  "Kosher"
              ],
              "cautions": [],
              "ingredientLines": [
                  "2 acorn squash, cut in half, cored and seeds taken out",
                  "2 acorn squash, cut in half, cored and seeds taken out",
                  "1 Tbsp extra virgin olive oil",
                  "¼ tsp allspice",
                  "½ tsp salt"
              ],
              "ingredients": [
                  {
                      "text": "2 acorn squash, cut in half, cored and seeds taken out",
                      "quantity": 2.0,
                      "measure": "<unit>",
                      "food": "acorn squash",
                      "weight": 862.0,
                      "foodCategory": "vegetables",
                      "foodId": "food_b1a90x2by6m8pnbsdfxnmascz2tc",
                      "image": "https://www.edamam.com/food-img/f90/f903abb8694c9e918040fbd7fb776c4f.jpg"
                  },
                  {
                      "text": "2 acorn squash, cut in half, cored and seeds taken out",
                      "quantity": 2.0,
                      "measure": "<unit>",
                      "food": "acorn squash",
                      "weight": 862.0,
                      "foodCategory": "vegetables",
                      "foodId": "food_b1a90x2by6m8pnbsdfxnmascz2tc",
                      "image": "https://www.edamam.com/food-img/f90/f903abb8694c9e918040fbd7fb776c4f.jpg"
                  },
                  {
                      "text": "1 Tbsp extra virgin olive oil",
                      "quantity": 1.0,
                      "measure": "tablespoon",
                      "food": "extra virgin olive oil",
                      "weight": 13.5,
                      "foodCategory": "Oils",
                      "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                      "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                  },
                  {
                      "text": "¼ tsp allspice",
                      "quantity": 0.25,
                      "measure": "teaspoon",
                      "food": "allspice",
                      "weight": 0.475,
                      "foodCategory": "Condiments and sauces",
                      "foodId": "food_avzem7oamop4dsa5wb65obt5ldgi",
                      "image": "https://www.edamam.com/food-img/c3f/c3f96d47d334b92f0120ff0b3a512ec3.jpg"
                  },
                  {
                      "text": "½ tsp salt",
                      "quantity": 0.5,
                      "measure": "teaspoon",
                      "food": "salt",
                      "weight": 3.0,
                      "foodCategory": "Condiments and sauces",
                      "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                      "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                  }
              ],
              "calories": 810.1892500000001,
              "totalCO2Emissions": 996.529698406,
              "co2EmissionsClass": "C",
              "totalWeight": 1740.975,
              "totalTime": 30.0,
              "cuisineType": [
                  "american"
              ],
              "mealType": [
                  "lunch/dinner"
              ],
              "dishType": [
                  "main course"
              ],
              "totalNutrients": {
                  "ENERC_KCAL": {
                      "label": "Energy",
                      "quantity": 810.1892500000001,
                      "unit": "kcal"
                  },
                  "FAT": {
                      "label": "Fat",
                      "quantity": 15.2652775,
                      "unit": "g"
                  },
                  "FASAT": {
                      "label": "Saturated",
                      "quantity": 2.2371525000000005,
                      "unit": "g"
                  },
                  "FATRN": {
                      "label": "Trans",
                      "quantity": 0.0,
                      "unit": "g"
                  },
                  "FAMS": {
                      "label": "Monounsaturated",
                      "quantity": 9.978815,
                      "unit": "g"
                  },
                  "FAPU": {
                      "label": "Polyunsaturated",
                      "quantity": 2.1527900000000004,
                      "unit": "g"
                  },
                  "CHOCDF": {
                      "label": "Carbs",
                      "quantity": 179.63847500000003,
                      "unit": "g"
                  },
                  "CHOCDF.net": {
                      "label": "Carbohydrates (net)",
                      "quantity": 153.67587500000002,
                      "unit": "g"
                  },
                  "FIBTG": {
                      "label": "Fiber",
                      "quantity": 25.962600000000002,
                      "unit": "g"
                  },
                  "SUGAR": {
                      "label": "Sugars",
                      "quantity": 0.0,
                      "unit": "g"
                  },
                  "PROCNT": {
                      "label": "Protein",
                      "quantity": 13.820927500000002,
                      "unit": "g"
                  },
                  "CHOLE": {
                      "label": "Cholesterol",
                      "quantity": 0.0,
                      "unit": "mg"
                  },
                  "NA": {
                      "label": "Sodium",
                      "quantity": 1216.35575,
                      "unit": "mg"
                  },
                  "CA": {
                      "label": "Calcium",
                      "quantity": 572.9147500000001,
                      "unit": "mg"
                  },
                  "MG": {
                      "label": "Magnesium",
                      "quantity": 552.35125,
                      "unit": "mg"
                  },
                  "K": {
                      "label": "Potassium",
                      "quantity": 5987.595,
                      "unit": "mg"
                  },
                  "FE": {
                      "label": "Iron",
                      "quantity": 12.187035000000002,
                      "unit": "mg"
                  },
                  "ZN": {
                      "label": "Zinc",
                      "quantity": 2.2489975000000006,
                      "unit": "mg"
                  },
                  "P": {
                      "label": "Phosphorus",
                      "quantity": 621.1767500000001,
                      "unit": "mg"
                  },
                  "VITA_RAE": {
                      "label": "Vitamin A",
                      "quantity": 310.44825000000003,
                      "unit": "µg"
                  },
                  "VITC": {
                      "label": "Vitamin C",
                      "quantity": 189.82620000000003,
                      "unit": "mg"
                  },
                  "THIA": {
                      "label": "Thiamin (B1)",
                      "quantity": 2.4140797500000004,
                      "unit": "mg"
                  },
                  "RIBF": {
                      "label": "Riboflavin (B2)",
                      "quantity": 0.17269925000000003,
                      "unit": "mg"
                  },
                  "NIA": {
                      "label": "Niacin (B3)",
                      "quantity": 12.081585000000002,
                      "unit": "mg"
                  },
                  "VITB6A": {
                      "label": "Vitamin B6",
                      "quantity": 2.6559575000000004,
                      "unit": "mg"
                  },
                  "FOLDFE": {
                      "label": "Folate equivalent (total)",
                      "quantity": 293.25100000000003,
                      "unit": "µg"
                  },
                  "FOLFD": {
                      "label": "Folate (food)",
                      "quantity": 293.25100000000003,
                      "unit": "µg"
                  },
                  "FOLAC": {
                      "label": "Folic acid",
                      "quantity": 0.0,
                      "unit": "µg"
                  },
                  "VITB12": {
                      "label": "Vitamin B12",
                      "quantity": 0.0,
                      "unit": "µg"
                  },
                  "VITD": {
                      "label": "Vitamin D",
                      "quantity": 0.0,
                      "unit": "µg"
                  },
                  "TOCPHA": {
                      "label": "Vitamin E",
                      "quantity": 1.9440000000000002,
                      "unit": "mg"
                  },
                  "VITK1": {
                      "label": "Vitamin K",
                      "quantity": 8.127,
                      "unit": "µg"
                  },
                  "WATER": {
                      "label": "Water",
                      "quantity": 1513.7181850000002,
                      "unit": "g"
                  }
              },
              "totalDaily": {
                  "ENERC_KCAL": {
                      "label": "Energy",
                      "quantity": 40.50946250000001,
                      "unit": "%"
                  },
                  "FAT": {
                      "label": "Fat",
                      "quantity": 23.485042307692307,
                      "unit": "%"
                  },
                  "FASAT": {
                      "label": "Saturated",
                      "quantity": 11.185762500000003,
                      "unit": "%"
                  },
                  "CHOCDF": {
                      "label": "Carbs",
                      "quantity": 59.87949166666668,
                      "unit": "%"
                  },
                  "FIBTG": {
                      "label": "Fiber",
                      "quantity": 103.85040000000001,
                      "unit": "%"
                  },
                  "PROCNT": {
                      "label": "Protein",
                      "quantity": 27.641855000000007,
                      "unit": "%"
                  },
                  "CHOLE": {
                      "label": "Cholesterol",
                      "quantity": 0.0,
                      "unit": "%"
                  },
                  "NA": {
                      "label": "Sodium",
                      "quantity": 50.68148958333333,
                      "unit": "%"
                  },
                  "CA": {
                      "label": "Calcium",
                      "quantity": 57.29147500000001,
                      "unit": "%"
                  },
                  "MG": {
                      "label": "Magnesium",
                      "quantity": 131.5122023809524,
                      "unit": "%"
                  },
                  "K": {
                      "label": "Potassium",
                      "quantity": 127.39563829787234,
                      "unit": "%"
                  },
                  "FE": {
                      "label": "Iron",
                      "quantity": 67.70575000000001,
                      "unit": "%"
                  },
                  "ZN": {
                      "label": "Zinc",
                      "quantity": 20.445431818181824,
                      "unit": "%"
                  },
                  "P": {
                      "label": "Phosphorus",
                      "quantity": 88.73953571428572,
                      "unit": "%"
                  },
                  "VITA_RAE": {
                      "label": "Vitamin A",
                      "quantity": 34.49425000000001,
                      "unit": "%"
                  },
                  "VITC": {
                      "label": "Vitamin C",
                      "quantity": 210.91800000000003,
                      "unit": "%"
                  },
                  "THIA": {
                      "label": "Thiamin (B1)",
                      "quantity": 201.17331250000004,
                      "unit": "%"
                  },
                  "RIBF": {
                      "label": "Riboflavin (B2)",
                      "quantity": 13.284557692307695,
                      "unit": "%"
                  },
                  "NIA": {
                      "label": "Niacin (B3)",
                      "quantity": 75.50990625000001,
                      "unit": "%"
                  },
                  "VITB6A": {
                      "label": "Vitamin B6",
                      "quantity": 204.30442307692311,
                      "unit": "%"
                  },
                  "FOLDFE": {
                      "label": "Folate equivalent (total)",
                      "quantity": 73.31275000000001,
                      "unit": "%"
                  },
                  "VITB12": {
                      "label": "Vitamin B12",
                      "quantity": 0.0,
                      "unit": "%"
                  },
                  "VITD": {
                      "label": "Vitamin D",
                      "quantity": 0.0,
                      "unit": "%"
                  },
                  "TOCPHA": {
                      "label": "Vitamin E",
                      "quantity": 12.96,
                      "unit": "%"
                  },
                  "VITK1": {
                      "label": "Vitamin K",
                      "quantity": 6.7725,
                      "unit": "%"
                  }
              },
              "digest": [
                  {
                      "label": "Fat",
                      "tag": "FAT",
                      "schemaOrgTag": "fatContent",
                      "total": 15.2652775,
                      "hasRDI": true,
                      "daily": 23.485042307692307,
                      "unit": "g",
                      "sub": [
                          {
                              "label": "Saturated",
                              "tag": "FASAT",
                              "schemaOrgTag": "saturatedFatContent",
                              "total": 2.2371525000000005,
                              "hasRDI": true,
                              "daily": 11.185762500000003,
                              "unit": "g"
                          },
                          {
                              "label": "Trans",
                              "tag": "FATRN",
                              "schemaOrgTag": "transFatContent",
                              "total": 0.0,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Monounsaturated",
                              "tag": "FAMS",
                              "schemaOrgTag": null,
                              "total": 9.978815,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Polyunsaturated",
                              "tag": "FAPU",
                              "schemaOrgTag": null,
                              "total": 2.1527900000000004,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          }
                      ]
                  },
                  {
                      "label": "Carbs",
                      "tag": "CHOCDF",
                      "schemaOrgTag": "carbohydrateContent",
                      "total": 179.63847500000003,
                      "hasRDI": true,
                      "daily": 59.87949166666668,
                      "unit": "g",
                      "sub": [
                          {
                              "label": "Carbs (net)",
                              "tag": "CHOCDF.net",
                              "schemaOrgTag": null,
                              "total": 153.67587500000002,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Fiber",
                              "tag": "FIBTG",
                              "schemaOrgTag": "fiberContent",
                              "total": 25.962600000000002,
                              "hasRDI": true,
                              "daily": 103.85040000000001,
                              "unit": "g"
                          },
                          {
                              "label": "Sugars",
                              "tag": "SUGAR",
                              "schemaOrgTag": "sugarContent",
                              "total": 0.0,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Sugars, added",
                              "tag": "SUGAR.added",
                              "schemaOrgTag": null,
                              "total": 0.0,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          }
                      ]
                  },
                  {
                      "label": "Protein",
                      "tag": "PROCNT",
                      "schemaOrgTag": "proteinContent",
                      "total": 13.820927500000002,
                      "hasRDI": true,
                      "daily": 27.641855000000007,
                      "unit": "g"
                  },
                  {
                      "label": "Cholesterol",
                      "tag": "CHOLE",
                      "schemaOrgTag": "cholesterolContent",
                      "total": 0.0,
                      "hasRDI": true,
                      "daily": 0.0,
                      "unit": "mg"
                  },
                  {
                      "label": "Sodium",
                      "tag": "NA",
                      "schemaOrgTag": "sodiumContent",
                      "total": 1216.35575,
                      "hasRDI": true,
                      "daily": 50.68148958333333,
                      "unit": "mg"
                  },
                  {
                      "label": "Calcium",
                      "tag": "CA",
                      "schemaOrgTag": null,
                      "total": 572.9147500000001,
                      "hasRDI": true,
                      "daily": 57.29147500000001,
                      "unit": "mg"
                  },
                  {
                      "label": "Magnesium",
                      "tag": "MG",
                      "schemaOrgTag": null,
                      "total": 552.35125,
                      "hasRDI": true,
                      "daily": 131.5122023809524,
                      "unit": "mg"
                  },
                  {
                      "label": "Potassium",
                      "tag": "K",
                      "schemaOrgTag": null,
                      "total": 5987.595,
                      "hasRDI": true,
                      "daily": 127.39563829787234,
                      "unit": "mg"
                  },
                  {
                      "label": "Iron",
                      "tag": "FE",
                      "schemaOrgTag": null,
                      "total": 12.187035000000002,
                      "hasRDI": true,
                      "daily": 67.70575000000001,
                      "unit": "mg"
                  },
                  {
                      "label": "Zinc",
                      "tag": "ZN",
                      "schemaOrgTag": null,
                      "total": 2.2489975000000006,
                      "hasRDI": true,
                      "daily": 20.445431818181824,
                      "unit": "mg"
                  },
                  {
                      "label": "Phosphorus",
                      "tag": "P",
                      "schemaOrgTag": null,
                      "total": 621.1767500000001,
                      "hasRDI": true,
                      "daily": 88.73953571428572,
                      "unit": "mg"
                  },
                  {
                      "label": "Vitamin A",
                      "tag": "VITA_RAE",
                      "schemaOrgTag": null,
                      "total": 310.44825000000003,
                      "hasRDI": true,
                      "daily": 34.49425000000001,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin C",
                      "tag": "VITC",
                      "schemaOrgTag": null,
                      "total": 189.82620000000003,
                      "hasRDI": true,
                      "daily": 210.91800000000003,
                      "unit": "mg"
                  },
                  {
                      "label": "Thiamin (B1)",
                      "tag": "THIA",
                      "schemaOrgTag": null,
                      "total": 2.4140797500000004,
                      "hasRDI": true,
                      "daily": 201.17331250000004,
                      "unit": "mg"
                  },
                  {
                      "label": "Riboflavin (B2)",
                      "tag": "RIBF",
                      "schemaOrgTag": null,
                      "total": 0.17269925000000003,
                      "hasRDI": true,
                      "daily": 13.284557692307695,
                      "unit": "mg"
                  },
                  {
                      "label": "Niacin (B3)",
                      "tag": "NIA",
                      "schemaOrgTag": null,
                      "total": 12.081585000000002,
                      "hasRDI": true,
                      "daily": 75.50990625000001,
                      "unit": "mg"
                  },
                  {
                      "label": "Vitamin B6",
                      "tag": "VITB6A",
                      "schemaOrgTag": null,
                      "total": 2.6559575000000004,
                      "hasRDI": true,
                      "daily": 204.30442307692311,
                      "unit": "mg"
                  },
                  {
                      "label": "Folate equivalent (total)",
                      "tag": "FOLDFE",
                      "schemaOrgTag": null,
                      "total": 293.25100000000003,
                      "hasRDI": true,
                      "daily": 73.31275000000001,
                      "unit": "µg"
                  },
                  {
                      "label": "Folate (food)",
                      "tag": "FOLFD",
                      "schemaOrgTag": null,
                      "total": 293.25100000000003,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Folic acid",
                      "tag": "FOLAC",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin B12",
                      "tag": "VITB12",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": true,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin D",
                      "tag": "VITD",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": true,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin E",
                      "tag": "TOCPHA",
                      "schemaOrgTag": null,
                      "total": 1.9440000000000002,
                      "hasRDI": true,
                      "daily": 12.96,
                      "unit": "mg"
                  },
                  {
                      "label": "Vitamin K",
                      "tag": "VITK1",
                      "schemaOrgTag": null,
                      "total": 8.127,
                      "hasRDI": true,
                      "daily": 6.7725,
                      "unit": "µg"
                  },
                  {
                      "label": "Sugar alcohols",
                      "tag": "Sugar.alcohol",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "g"
                  },
                  {
                      "label": "Water",
                      "tag": "WATER",
                      "schemaOrgTag": null,
                      "total": 1513.7181850000002,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "g"
                  }
              ]
          },
          "_links": {
              "self": {
                  "href": "https://api.edamam.com/api/recipes/v2/4dcd63b12822e541d70332bfc93fd77b?type=public&app_id=ab54757d&app_key=b3218f5346afe1f35a7cb3650de96b38",
                  "title": "Self"
              }
          }
      },
      {
          "recipe": {
              "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_6b7d23ee56a4dde60688f4937aabf5d4",
              "label": "Red Palm Oil Roasted Winter Vegetables",
              "image": "https://edamam-product-images.s3.amazonaws.com/web-img/2c1/2c15ba3b8687f275fe113b883210a4cf.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=152517294b77f4232cdd23f0c5f1f6d481aa4b4f3fcd654705bb0a7e3588176f",
              "images": {
                  "THUMBNAIL": {
                      "url": "https://edamam-product-images.s3.amazonaws.com/web-img/2c1/2c15ba3b8687f275fe113b883210a4cf-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=24bedd97707f507f65236eab1a71989349125e69e8a5ea6ddc8686f137d11d73",
                      "width": 100,
                      "height": 100
                  },
                  "SMALL": {
                      "url": "https://edamam-product-images.s3.amazonaws.com/web-img/2c1/2c15ba3b8687f275fe113b883210a4cf-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2da1e6e00167a458250d1eb2be508b8e9ee8c905c20c9e4e13a2e8309c7d29ad",
                      "width": 200,
                      "height": 200
                  },
                  "REGULAR": {
                      "url": "https://edamam-product-images.s3.amazonaws.com/web-img/2c1/2c15ba3b8687f275fe113b883210a4cf.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=152517294b77f4232cdd23f0c5f1f6d481aa4b4f3fcd654705bb0a7e3588176f",
                      "width": 300,
                      "height": 300
                  },
                  "LARGE": {
                      "url": "https://edamam-product-images.s3.amazonaws.com/web-img/2c1/2c15ba3b8687f275fe113b883210a4cf-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c4d062cc0568957a6ab9688d68ed13789f246f438346561440aab64ebb3b6ab2",
                      "width": 600,
                      "height": 600
                  }
              },
              "source": "mylifecookbook.com",
              "url": "https://mylifecookbook.com/red-palm-oil-roasted-winter-vegetables/",
              "shareAs": "http://www.edamam.com/recipe/red-palm-oil-roasted-winter-vegetables-6b7d23ee56a4dde60688f4937aabf5d4/-/low-sugar/high-fiber",
              "yield": 4.0,
              "dietLabels": [
                  "High-Fiber"
              ],
              "healthLabels": [
                  "Sugar-Conscious",
                  "Low Sugar",
                  "Vegan",
                  "Vegetarian",
                  "Pescatarian",
                  "Paleo",
                  "Dairy-Free",
                  "Gluten-Free",
                  "Wheat-Free",
                  "Egg-Free",
                  "Peanut-Free",
                  "Tree-Nut-Free",
                  "Soy-Free",
                  "Fish-Free",
                  "Shellfish-Free",
                  "Pork-Free",
                  "Red-Meat-Free",
                  "Crustacean-Free",
                  "Celery-Free",
                  "Mustard-Free",
                  "Sesame-Free",
                  "Lupine-Free",
                  "Mollusk-Free",
                  "Alcohol-Free",
                  "Sulfite-Free",
                  "Kosher"
              ],
              "cautions": [
                  "Sulfites"
              ],
              "ingredientLines": [
                  "6 cups vegetables (see what I used below)",
                  "3 tablespoons Nutiva red palm oil",
                  "salt & pepper to taste"
              ],
              "ingredients": [
                  {
                      "text": "6 cups vegetables (see what I used below)",
                      "quantity": 6.0,
                      "measure": "cup",
                      "food": "vegetables",
                      "weight": 546.0,
                      "foodCategory": "vegetables",
                      "foodId": "food_bitqzx8b319psvbib2dufarphbxy",
                      "image": "https://www.edamam.com/food-img/f3f/f3fa6996eba331be219778406f67a5a3.jpg"
                  },
                  {
                      "text": "3 tablespoons Nutiva red palm oil",
                      "quantity": 3.0,
                      "measure": "tablespoon",
                      "food": "palm oil",
                      "weight": 40.8,
                      "foodCategory": "Oils",
                      "foodId": "food_abiggr0bhy0nyiaqcgitmapo5eod",
                      "image": "https://www.edamam.com/food-img/1d7/1d79385a862f46a42f16ea73e79399e3.jpg"
                  },
                  {
                      "text": "salt & pepper to taste",
                      "quantity": 0.0,
                      "measure": null,
                      "food": "salt",
                      "weight": 3.5208,
                      "foodCategory": "Condiments and sauces",
                      "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                      "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                  }
              ],
              "calories": 753.7919999999999,
              "totalCO2Emissions": 615.8721109511999,
              "co2EmissionsClass": "C",
              "totalWeight": 589.6555970721649,
              "totalTime": 0.0,
              "cuisineType": [
                  "american"
              ],
              "mealType": [
                  "lunch/dinner"
              ],
              "dishType": [
                  "main course"
              ],
              "totalNutrients": {
                  "ENERC_KCAL": {
                      "label": "Energy",
                      "quantity": 753.7919999999999,
                      "unit": "kcal"
                  },
                  "FAT": {
                      "label": "Fat",
                      "quantity": 43.639199999999995,
                      "unit": "g"
                  },
                  "FASAT": {
                      "label": "Saturated",
                      "quantity": 20.649479999999997,
                      "unit": "g"
                  },
                  "FATRN": {
                      "label": "Trans",
                      "quantity": 0.0,
                      "unit": "g"
                  },
                  "FAMS": {
                      "label": "Monounsaturated",
                      "quantity": 15.265259999999998,
                      "unit": "g"
                  },
                  "FAPU": {
                      "label": "Polyunsaturated",
                      "quantity": 5.0775,
                      "unit": "g"
                  },
                  "CHOCDF": {
                      "label": "Carbs",
                      "quantity": 73.71,
                      "unit": "g"
                  },
                  "CHOCDF.net": {
                      "label": "Carbohydrates (net)",
                      "quantity": 51.86999999999999,
                      "unit": "g"
                  },
                  "FIBTG": {
                      "label": "Fiber",
                      "quantity": 21.84,
                      "unit": "g"
                  },
                  "SUGAR": {
                      "label": "Sugars",
                      "quantity": 0.0,
                      "unit": "g"
                  },
                  "PROCNT": {
                      "label": "Protein",
                      "quantity": 18.1818,
                      "unit": "g"
                  },
                  "CHOLE": {
                      "label": "Cholesterol",
                      "quantity": 0.0,
                      "unit": "mg"
                  },
                  "NA": {
                      "label": "Sodium",
                      "quantity": 1364.5916639999996,
                      "unit": "mg"
                  },
                  "CA": {
                      "label": "Calcium",
                      "quantity": 137.18534329731958,
                      "unit": "mg"
                  },
                  "MG": {
                      "label": "Magnesium",
                      "quantity": 131.06855597072163,
                      "unit": "mg"
                  },
                  "K": {
                      "label": "Potassium",
                      "quantity": 1157.748447765773,
                      "unit": "mg"
                  },
                  "FE": {
                      "label": "Iron",
                      "quantity": 5.200503470338144,
                      "unit": "mg"
                  },
                  "ZN": {
                      "label": "Zinc",
                      "quantity": 2.4598555970721647,
                      "unit": "mg"
                  },
                  "P": {
                      "label": "Phosphorus",
                      "quantity": 322.14,
                      "unit": "mg"
                  },
                  "VITA_RAE": {
                      "label": "Vitamin A",
                      "quantity": 1386.84,
                      "unit": "µg"
                  },
                  "VITC": {
                      "label": "Vitamin C",
                      "quantity": 56.784,
                      "unit": "mg"
                  },
                  "THIA": {
                      "label": "Thiamin (B1)",
                      "quantity": 0.6661199999999999,
                      "unit": "mg"
                  },
                  "RIBF": {
                      "label": "Riboflavin (B2)",
                      "quantity": 0.4641,
                      "unit": "mg"
                  },
                  "NIA": {
                      "label": "Niacin (B3)",
                      "quantity": 6.825,
                      "unit": "mg"
                  },
                  "VITB6A": {
                      "label": "Vitamin B6",
                      "quantity": 0.52416,
                      "unit": "mg"
                  },
                  "FOLDFE": {
                      "label": "Folate equivalent (total)",
                      "quantity": 158.34,
                      "unit": "µg"
                  },
                  "FOLFD": {
                      "label": "Folate (food)",
                      "quantity": 158.34,
                      "unit": "µg"
                  },
                  "FOLAC": {
                      "label": "Folic acid",
                      "quantity": 0.0,
                      "unit": "µg"
                  },
                  "VITB12": {
                      "label": "Vitamin B12",
                      "quantity": 0.0,
                      "unit": "µg"
                  },
                  "VITD": {
                      "label": "Vitamin D",
                      "quantity": 0.0,
                      "unit": "µg"
                  },
                  "TOCPHA": {
                      "label": "Vitamin E",
                      "quantity": 6.4872,
                      "unit": "mg"
                  },
                  "VITK1": {
                      "label": "Vitamin K",
                      "quantity": 3.264,
                      "unit": "µg"
                  },
                  "WATER": {
                      "label": "Water",
                      "quantity": 448.2717111941443,
                      "unit": "g"
                  }
              },
              "totalDaily": {
                  "ENERC_KCAL": {
                      "label": "Energy",
                      "quantity": 37.6896,
                      "unit": "%"
                  },
                  "FAT": {
                      "label": "Fat",
                      "quantity": 67.13723076923075,
                      "unit": "%"
                  },
                  "FASAT": {
                      "label": "Saturated",
                      "quantity": 103.2474,
                      "unit": "%"
                  },
                  "CHOCDF": {
                      "label": "Carbs",
                      "quantity": 24.569999999999997,
                      "unit": "%"
                  },
                  "FIBTG": {
                      "label": "Fiber",
                      "quantity": 87.36,
                      "unit": "%"
                  },
                  "PROCNT": {
                      "label": "Protein",
                      "quantity": 36.3636,
                      "unit": "%"
                  },
                  "CHOLE": {
                      "label": "Cholesterol",
                      "quantity": 0.0,
                      "unit": "%"
                  },
                  "NA": {
                      "label": "Sodium",
                      "quantity": 56.85798599999998,
                      "unit": "%"
                  },
                  "CA": {
                      "label": "Calcium",
                      "quantity": 13.718534329731957,
                      "unit": "%"
                  },
                  "MG": {
                      "label": "Magnesium",
                      "quantity": 31.206799040648008,
                      "unit": "%"
                  },
                  "K": {
                      "label": "Potassium",
                      "quantity": 24.63294569714411,
                      "unit": "%"
                  },
                  "FE": {
                      "label": "Iron",
                      "quantity": 28.891685946323022,
                      "unit": "%"
                  },
                  "ZN": {
                      "label": "Zinc",
                      "quantity": 22.36232360974695,
                      "unit": "%"
                  },
                  "P": {
                      "label": "Phosphorus",
                      "quantity": 46.02,
                      "unit": "%"
                  },
                  "VITA_RAE": {
                      "label": "Vitamin A",
                      "quantity": 154.09333333333333,
                      "unit": "%"
                  },
                  "VITC": {
                      "label": "Vitamin C",
                      "quantity": 63.09333333333333,
                      "unit": "%"
                  },
                  "THIA": {
                      "label": "Thiamin (B1)",
                      "quantity": 55.51,
                      "unit": "%"
                  },
                  "RIBF": {
                      "label": "Riboflavin (B2)",
                      "quantity": 35.7,
                      "unit": "%"
                  },
                  "NIA": {
                      "label": "Niacin (B3)",
                      "quantity": 42.65625,
                      "unit": "%"
                  },
                  "VITB6A": {
                      "label": "Vitamin B6",
                      "quantity": 40.31999999999999,
                      "unit": "%"
                  },
                  "FOLDFE": {
                      "label": "Folate equivalent (total)",
                      "quantity": 39.585,
                      "unit": "%"
                  },
                  "VITB12": {
                      "label": "Vitamin B12",
                      "quantity": 0.0,
                      "unit": "%"
                  },
                  "VITD": {
                      "label": "Vitamin D",
                      "quantity": 0.0,
                      "unit": "%"
                  },
                  "TOCPHA": {
                      "label": "Vitamin E",
                      "quantity": 43.248,
                      "unit": "%"
                  },
                  "VITK1": {
                      "label": "Vitamin K",
                      "quantity": 2.7199999999999998,
                      "unit": "%"
                  }
              },
              "digest": [
                  {
                      "label": "Fat",
                      "tag": "FAT",
                      "schemaOrgTag": "fatContent",
                      "total": 43.639199999999995,
                      "hasRDI": true,
                      "daily": 67.13723076923075,
                      "unit": "g",
                      "sub": [
                          {
                              "label": "Saturated",
                              "tag": "FASAT",
                              "schemaOrgTag": "saturatedFatContent",
                              "total": 20.649479999999997,
                              "hasRDI": true,
                              "daily": 103.2474,
                              "unit": "g"
                          },
                          {
                              "label": "Trans",
                              "tag": "FATRN",
                              "schemaOrgTag": "transFatContent",
                              "total": 0.0,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Monounsaturated",
                              "tag": "FAMS",
                              "schemaOrgTag": null,
                              "total": 15.265259999999998,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Polyunsaturated",
                              "tag": "FAPU",
                              "schemaOrgTag": null,
                              "total": 5.0775,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          }
                      ]
                  },
                  {
                      "label": "Carbs",
                      "tag": "CHOCDF",
                      "schemaOrgTag": "carbohydrateContent",
                      "total": 73.71,
                      "hasRDI": true,
                      "daily": 24.569999999999997,
                      "unit": "g",
                      "sub": [
                          {
                              "label": "Carbs (net)",
                              "tag": "CHOCDF.net",
                              "schemaOrgTag": null,
                              "total": 51.86999999999999,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Fiber",
                              "tag": "FIBTG",
                              "schemaOrgTag": "fiberContent",
                              "total": 21.84,
                              "hasRDI": true,
                              "daily": 87.36,
                              "unit": "g"
                          },
                          {
                              "label": "Sugars",
                              "tag": "SUGAR",
                              "schemaOrgTag": "sugarContent",
                              "total": 0.0,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Sugars, added",
                              "tag": "SUGAR.added",
                              "schemaOrgTag": null,
                              "total": 0.0,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          }
                      ]
                  },
                  {
                      "label": "Protein",
                      "tag": "PROCNT",
                      "schemaOrgTag": "proteinContent",
                      "total": 18.1818,
                      "hasRDI": true,
                      "daily": 36.3636,
                      "unit": "g"
                  },
                  {
                      "label": "Cholesterol",
                      "tag": "CHOLE",
                      "schemaOrgTag": "cholesterolContent",
                      "total": 0.0,
                      "hasRDI": true,
                      "daily": 0.0,
                      "unit": "mg"
                  },
                  {
                      "label": "Sodium",
                      "tag": "NA",
                      "schemaOrgTag": "sodiumContent",
                      "total": 1364.5916639999996,
                      "hasRDI": true,
                      "daily": 56.85798599999998,
                      "unit": "mg"
                  },
                  {
                      "label": "Calcium",
                      "tag": "CA",
                      "schemaOrgTag": null,
                      "total": 137.18534329731958,
                      "hasRDI": true,
                      "daily": 13.718534329731957,
                      "unit": "mg"
                  },
                  {
                      "label": "Magnesium",
                      "tag": "MG",
                      "schemaOrgTag": null,
                      "total": 131.06855597072163,
                      "hasRDI": true,
                      "daily": 31.206799040648008,
                      "unit": "mg"
                  },
                  {
                      "label": "Potassium",
                      "tag": "K",
                      "schemaOrgTag": null,
                      "total": 1157.748447765773,
                      "hasRDI": true,
                      "daily": 24.63294569714411,
                      "unit": "mg"
                  },
                  {
                      "label": "Iron",
                      "tag": "FE",
                      "schemaOrgTag": null,
                      "total": 5.200503470338144,
                      "hasRDI": true,
                      "daily": 28.891685946323022,
                      "unit": "mg"
                  },
                  {
                      "label": "Zinc",
                      "tag": "ZN",
                      "schemaOrgTag": null,
                      "total": 2.4598555970721647,
                      "hasRDI": true,
                      "daily": 22.36232360974695,
                      "unit": "mg"
                  },
                  {
                      "label": "Phosphorus",
                      "tag": "P",
                      "schemaOrgTag": null,
                      "total": 322.14,
                      "hasRDI": true,
                      "daily": 46.02,
                      "unit": "mg"
                  },
                  {
                      "label": "Vitamin A",
                      "tag": "VITA_RAE",
                      "schemaOrgTag": null,
                      "total": 1386.84,
                      "hasRDI": true,
                      "daily": 154.09333333333333,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin C",
                      "tag": "VITC",
                      "schemaOrgTag": null,
                      "total": 56.784,
                      "hasRDI": true,
                      "daily": 63.09333333333333,
                      "unit": "mg"
                  },
                  {
                      "label": "Thiamin (B1)",
                      "tag": "THIA",
                      "schemaOrgTag": null,
                      "total": 0.6661199999999999,
                      "hasRDI": true,
                      "daily": 55.51,
                      "unit": "mg"
                  },
                  {
                      "label": "Riboflavin (B2)",
                      "tag": "RIBF",
                      "schemaOrgTag": null,
                      "total": 0.4641,
                      "hasRDI": true,
                      "daily": 35.7,
                      "unit": "mg"
                  },
                  {
                      "label": "Niacin (B3)",
                      "tag": "NIA",
                      "schemaOrgTag": null,
                      "total": 6.825,
                      "hasRDI": true,
                      "daily": 42.65625,
                      "unit": "mg"
                  },
                  {
                      "label": "Vitamin B6",
                      "tag": "VITB6A",
                      "schemaOrgTag": null,
                      "total": 0.52416,
                      "hasRDI": true,
                      "daily": 40.31999999999999,
                      "unit": "mg"
                  },
                  {
                      "label": "Folate equivalent (total)",
                      "tag": "FOLDFE",
                      "schemaOrgTag": null,
                      "total": 158.34,
                      "hasRDI": true,
                      "daily": 39.585,
                      "unit": "µg"
                  },
                  {
                      "label": "Folate (food)",
                      "tag": "FOLFD",
                      "schemaOrgTag": null,
                      "total": 158.34,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Folic acid",
                      "tag": "FOLAC",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin B12",
                      "tag": "VITB12",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": true,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin D",
                      "tag": "VITD",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": true,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin E",
                      "tag": "TOCPHA",
                      "schemaOrgTag": null,
                      "total": 6.4872,
                      "hasRDI": true,
                      "daily": 43.248,
                      "unit": "mg"
                  },
                  {
                      "label": "Vitamin K",
                      "tag": "VITK1",
                      "schemaOrgTag": null,
                      "total": 3.264,
                      "hasRDI": true,
                      "daily": 2.7199999999999998,
                      "unit": "µg"
                  },
                  {
                      "label": "Sugar alcohols",
                      "tag": "Sugar.alcohol",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "g"
                  },
                  {
                      "label": "Water",
                      "tag": "WATER",
                      "schemaOrgTag": null,
                      "total": 448.2717111941443,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "g"
                  }
              ]
          },
          "_links": {
              "self": {
                  "href": "https://api.edamam.com/api/recipes/v2/6b7d23ee56a4dde60688f4937aabf5d4?type=public&app_id=ab54757d&app_key=b3218f5346afe1f35a7cb3650de96b38",
                  "title": "Self"
              }
          }
      },
      {
          "recipe": {
              "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_637d0d9235eeaebfc3464318cc00e674",
              "label": "Jamie Oliver's Mashed Root Vegetables",
              "image": "https://edamam-product-images.s3.amazonaws.com/web-img/a74/a74ecabdf2e932652019649b27a42acc.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=00e4ef4901e70d8e3d3aaec7e4f59e3429da1ec8b8a37dd41ec2baf6a4f32bf9",
              "images": {
                  "THUMBNAIL": {
                      "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a74/a74ecabdf2e932652019649b27a42acc-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=697a0fde4520dd0a49d1c49a1bf5096ff00c141a6cfecc28d9a656b54562f922",
                      "width": 100,
                      "height": 100
                  },
                  "SMALL": {
                      "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a74/a74ecabdf2e932652019649b27a42acc-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0700b95a70a399c3deb342a558aed2b5af3392582e10f04cf0fc637be3a30de4",
                      "width": 200,
                      "height": 200
                  },
                  "REGULAR": {
                      "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a74/a74ecabdf2e932652019649b27a42acc.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=00e4ef4901e70d8e3d3aaec7e4f59e3429da1ec8b8a37dd41ec2baf6a4f32bf9",
                      "width": 300,
                      "height": 300
                  },
                  "LARGE": {
                      "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a74/a74ecabdf2e932652019649b27a42acc-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJHMEUCIQCIzFXpoXnzXNHlSt628qKviZI%2FpKUnU3Tr6zmkZu0%2FQQIgLWhaw4pmJ1rm6MZfd6vu4Dhq0lXi2ZZUbond0PcuGPAquQUIOhAAGgwxODcwMTcxNTA5ODYiDO5n6w%2BEYF1GFnCwnSqWBT44BU09s1Fz%2B8VNoCIoTwTp7RXHDSNTJTFlrnhRfSPLm1ui6e3WTROackFsR8wzGieEPC6EC7Ro4ell1i0n1LS3O5F5IKd4y4iRXUZUVAp8wIIuD%2FQ3MHzEftHs3lB5tJ%2BvQ2mW53d7Nl6FVSSydjI3DxWwbFyfAWmkSVf7WkDetJjfU0%2BtVC1s0HENsdefqoK62tfpz5oJy%2FjKN7rQT0ENrVEgocnbT79XpzzTMOqxcNN%2Bla2bzxRPaZ4rjubsLq3EiuMFD%2FI7yStYpEOLOxUXAHv9cDTGrW3IiYgUAMcDpSD5WDnt2Wqv48o2HymDpRmSfAmkTtaSFPfRMFtK3mHeRveJt3UwbNt%2BFtsFbGdTeru8dH0A0H3N2kBeMh71%2FaaAGNd%2BeEj6901DmUsXi8BshhhT5SpSSYk7Be9Cau8vE%2FLMkYI7cIPQGU%2BtMzI%2BDAlvDUHpKPkWbtKh5qk4%2FOYUQQVZfEt2K8fQhKFDOkUej6tv3RJ2L3YNHJ97%2FjikyQ00HPvI8hd2roS5u3cuBtVGNjtgZnmIZwlqKdePE4nDffpFsvaKTQAlBhwW1HxOb%2BoTlimH1VKWz9Sjj%2BlAGP2w%2FG6WhdtJZNSunqPg%2BeXTUy75hyxWKLRKWdDa0%2BEVkngl7eMVJD47tvQu2WYXF9jlPcKTwgHeCbxsmfV0OtRH%2BPLiCeijfxgHAMhfmhGj%2F3jEkG2EW%2F1MlThZmmwViynjDqGihPs5Y2kx1VyjAHrbPaMZAEeAI6CcH9yweRQ9V4NZcbZ%2FSBwwT4yGEdcLBHf8SOQVhD8AKZgPOikKOQkOoySYv24jQ3fjtn6J3W2xhadplAirYzet0WtqT9L5ky6%2BuaBy7GkgYaoTvQOjyqpsUGY7Ws5iMLikiagGOrEBjjNMvuDGlv23bxq2%2BMkpO3yFe%2BIShSSr2iHTVcCf3k1PUN1xolpsT8kQ26IZ5beEwMPfM7%2Bq%2BshOZxXe6orGrLAx0DdbCQZqILRmTmJR6Z1g9xrolAuzVWp30HfiRU%2FWBnNeylAb%2BfuWCsVvLfh2TGRTSpcZCHRwgkvGqMeTB08KVjpURAfhgHO7CqwO%2Ff%2FqPimvOgp2h4VwbDC9ucgG7Sx7y0JwLQ3DboUDe02gliqA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T015723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCK4N434I%2F20230914%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d7ebfdf8ef690925bda079eed92f6fb14002d2b1c0c41bfdbe1ffd75ac6c226b",
                      "width": 600,
                      "height": 600
                  }
              },
              "source": "food.com",
              "url": "http://www.food.com/recipe/jamie-olivers-mashed-root-vegetables-300814",
              "shareAs": "http://www.edamam.com/recipe/jamie-oliver-s-mashed-root-vegetables-637d0d9235eeaebfc3464318cc00e674/-/low-sugar/high-fiber",
              "yield": 4.0,
              "dietLabels": [
                  "High-Fiber"
              ],
              "healthLabels": [
                  "Sugar-Conscious",
                  "Low Sugar",
                  "Vegetarian",
                  "Pescatarian",
                  "Gluten-Free",
                  "Wheat-Free",
                  "Egg-Free",
                  "Peanut-Free",
                  "Tree-Nut-Free",
                  "Soy-Free",
                  "Fish-Free",
                  "Shellfish-Free",
                  "Pork-Free",
                  "Red-Meat-Free",
                  "Crustacean-Free",
                  "Mustard-Free",
                  "Sesame-Free",
                  "Lupine-Free",
                  "Mollusk-Free",
                  "Alcohol-Free",
                  "Sulfite-Free",
                  "Kosher"
              ],
              "cautions": [
                  "Sulfites"
              ],
              "ingredientLines": [
                  "4 1⁄2 lbs root vegetables (celeriac, potatoes, *swede, parsnips, carrots, Jerusalem artichokes)",
                  "salt & freshly ground black pepper, to taste",
                  "extra virgin olive oil or butter"
              ],
              "ingredients": [
                  {
                      "text": "4 1⁄2 lbs root vegetables (celeriac, potatoes, *swede, parsnips, carrots, Jerusalem artichokes)",
                      "quantity": 4.5,
                      "measure": "pound",
                      "food": "vegetables",
                      "weight": 2041.165665,
                      "foodCategory": "vegetables",
                      "foodId": "food_bitqzx8b319psvbib2dufarphbxy",
                      "image": "https://www.edamam.com/food-img/f3f/f3fa6996eba331be219778406f67a5a3.jpg"
                  },
                  {
                      "text": "salt & freshly ground black pepper, to taste",
                      "quantity": 0.0,
                      "measure": null,
                      "food": "salt",
                      "weight": 12.24699399,
                      "foodCategory": "Condiments and sauces",
                      "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                      "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                  },
                  {
                      "text": "extra virgin olive oil or butter",
                      "quantity": 0.0,
                      "measure": null,
                      "food": "extra virgin olive oil",
                      "weight": 27.759853044,
                      "foodCategory": "Oils",
                      "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                      "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                  }
              ],
              "calories": 1715.03637970896,
              "totalCO2Emissions": 1253.6476142068645,
              "co2EmissionsClass": "D",
              "totalWeight": 2078.8516568432015,
              "totalTime": 35.0,
              "cuisineType": [
                  "american"
              ],
              "mealType": [
                  "lunch/dinner"
              ],
              "dishType": [
                  "main course"
              ],
              "totalNutrients": {
                  "ENERC_KCAL": {
                      "label": "Energy",
                      "quantity": 1715.03637970896,
                      "unit": "kcal"
                  },
                  "FAT": {
                      "label": "Fat",
                      "quantity": 38.373914502,
                      "unit": "g"
                  },
                  "FASAT": {
                      "label": "Saturated",
                      "quantity": 5.831202071772,
                      "unit": "g"
                  },
                  "FATRN": {
                      "label": "Trans",
                      "quantity": 0.0,
                      "unit": "g"
                  },
                  "FAMS": {
                      "label": "Monounsaturated",
                      "quantity": 20.89745407827,
                      "unit": "g"
                  },
                  "FAPU": {
                      "label": "Polyunsaturated",
                      "quantity": 7.71152388237,
                      "unit": "g"
                  },
                  "CHOCDF": {
                      "label": "Carbs",
                      "quantity": 275.557364775,
                      "unit": "g"
                  },
                  "CHOCDF.net": {
                      "label": "Carbohydrates (net)",
                      "quantity": 193.910738175,
                      "unit": "g"
                  },
                  "FIBTG": {
                      "label": "Fiber",
                      "quantity": 81.6466266,
                      "unit": "g"
                  },
                  "SUGAR": {
                      "label": "Sugars",
                      "quantity": 0.0,
                      "unit": "g"
                  },
                  "PROCNT": {
                      "label": "Protein",
                      "quantity": 67.9708166445,
                      "unit": "g"
                  },
                  "CHOLE": {
                      "label": "Cholesterol",
                      "quantity": 0.0,
                      "unit": "mg"
                  },
                  "NA": {
                      "label": "Sodium",
                      "quantity": 4811.244913700961,
                      "unit": "mg"
                  },
                  "CA": {
                      "label": "Calcium",
                      "quantity": 512.9512880922483,
                      "unit": "mg"
                  },
                  "MG": {
                      "label": "Magnesium",
                      "quantity": 489.97902098799204,
                      "unit": "mg"
                  },
                  "K": {
                      "label": "Potassium",
                      "quantity": 4328.342899434376,
                      "unit": "mg"
                  },
                  "FE": {
                      "label": "Iron",
                      "quantity": 19.579285252583762,
                      "unit": "mg"
                  },
                  "ZN": {
                      "label": "Zinc",
                      "quantity": 9.195171631299202,
                      "unit": "mg"
                  },
                  "P": {
                      "label": "Phosphorus",
                      "quantity": 1204.2877423500001,
                      "unit": "mg"
                  },
                  "VITA_RAE": {
                      "label": "Vitamin A",
                      "quantity": 5184.5607891,
                      "unit": "µg"
                  },
                  "VITC": {
                      "label": "Vitamin C",
                      "quantity": 212.28122916,
                      "unit": "mg"
                  },
                  "THIA": {
                      "label": "Thiamin (B1)",
                      "quantity": 2.4902221113,
                      "unit": "mg"
                  },
                  "RIBF": {
                      "label": "Riboflavin (B2)",
                      "quantity": 1.7349908152500002,
                      "unit": "mg"
                  },
                  "NIA": {
                      "label": "Niacin (B3)",
                      "quantity": 25.5145708125,
                      "unit": "mg"
                  },
                  "VITB6A": {
                      "label": "Vitamin B6",
                      "quantity": 1.9595190384,
                      "unit": "mg"
                  },
                  "FOLDFE": {
                      "label": "Folate equivalent (total)",
                      "quantity": 591.93804285,
                      "unit": "µg"
                  },
                  "FOLFD": {
                      "label": "Folate (food)",
                      "quantity": 591.93804285,
                      "unit": "µg"
                  },
                  "FOLAC": {
                      "label": "Folic acid",
                      "quantity": 0.0,
                      "unit": "µg"
                  },
                  "VITB12": {
                      "label": "Vitamin B12",
                      "quantity": 0.0,
                      "unit": "µg"
                  },
                  "VITD": {
                      "label": "Vitamin D",
                      "quantity": 0.0,
                      "unit": "µg"
                  },
                  "TOCPHA": {
                      "label": "Vitamin E",
                      "quantity": 3.997418838336,
                      "unit": "mg"
                  },
                  "VITK1": {
                      "label": "Vitamin K",
                      "quantity": 16.711431532488,
                      "unit": "µg"
                  },
                  "WATER": {
                      "label": "Water",
                      "quantity": 1675.8168632425984,
                      "unit": "g"
                  }
              },
              "totalDaily": {
                  "ENERC_KCAL": {
                      "label": "Energy",
                      "quantity": 85.751818985448,
                      "unit": "%"
                  },
                  "FAT": {
                      "label": "Fat",
                      "quantity": 59.036791541538456,
                      "unit": "%"
                  },
                  "FASAT": {
                      "label": "Saturated",
                      "quantity": 29.156010358859998,
                      "unit": "%"
                  },
                  "CHOCDF": {
                      "label": "Carbs",
                      "quantity": 91.85245492499999,
                      "unit": "%"
                  },
                  "FIBTG": {
                      "label": "Fiber",
                      "quantity": 326.5865064,
                      "unit": "%"
                  },
                  "PROCNT": {
                      "label": "Protein",
                      "quantity": 135.941633289,
                      "unit": "%"
                  },
                  "CHOLE": {
                      "label": "Cholesterol",
                      "quantity": 0.0,
                      "unit": "%"
                  },
                  "NA": {
                      "label": "Sodium",
                      "quantity": 200.46853807087336,
                      "unit": "%"
                  },
                  "CA": {
                      "label": "Calcium",
                      "quantity": 51.29512880922483,
                      "unit": "%"
                  },
                  "MG": {
                      "label": "Magnesium",
                      "quantity": 116.66167166380762,
                      "unit": "%"
                  },
                  "K": {
                      "label": "Potassium",
                      "quantity": 92.092402115625,
                      "unit": "%"
                  },
                  "FE": {
                      "label": "Iron",
                      "quantity": 108.77380695879869,
                      "unit": "%"
                  },
                  "ZN": {
                      "label": "Zinc",
                      "quantity": 83.5924693754473,
                      "unit": "%"
                  },
                  "P": {
                      "label": "Phosphorus",
                      "quantity": 172.04110605000002,
                      "unit": "%"
                  },
                  "VITA_RAE": {
                      "label": "Vitamin A",
                      "quantity": 576.0623099,
                      "unit": "%"
                  },
                  "VITC": {
                      "label": "Vitamin C",
                      "quantity": 235.8680324,
                      "unit": "%"
                  },
                  "THIA": {
                      "label": "Thiamin (B1)",
                      "quantity": 207.518509275,
                      "unit": "%"
                  },
                  "RIBF": {
                      "label": "Riboflavin (B2)",
                      "quantity": 133.4608319423077,
                      "unit": "%"
                  },
                  "NIA": {
                      "label": "Niacin (B3)",
                      "quantity": 159.466067578125,
                      "unit": "%"
                  },
                  "VITB6A": {
                      "label": "Vitamin B6",
                      "quantity": 150.73223372307692,
                      "unit": "%"
                  },
                  "FOLDFE": {
                      "label": "Folate equivalent (total)",
                      "quantity": 147.9845107125,
                      "unit": "%"
                  },
                  "VITB12": {
                      "label": "Vitamin B12",
                      "quantity": 0.0,
                      "unit": "%"
                  },
                  "VITD": {
                      "label": "Vitamin D",
                      "quantity": 0.0,
                      "unit": "%"
                  },
                  "TOCPHA": {
                      "label": "Vitamin E",
                      "quantity": 26.64945892224,
                      "unit": "%"
                  },
                  "VITK1": {
                      "label": "Vitamin K",
                      "quantity": 13.92619294374,
                      "unit": "%"
                  }
              },
              "digest": [
                  {
                      "label": "Fat",
                      "tag": "FAT",
                      "schemaOrgTag": "fatContent",
                      "total": 38.373914502,
                      "hasRDI": true,
                      "daily": 59.036791541538456,
                      "unit": "g",
                      "sub": [
                          {
                              "label": "Saturated",
                              "tag": "FASAT",
                              "schemaOrgTag": "saturatedFatContent",
                              "total": 5.831202071772,
                              "hasRDI": true,
                              "daily": 29.156010358859998,
                              "unit": "g"
                          },
                          {
                              "label": "Trans",
                              "tag": "FATRN",
                              "schemaOrgTag": "transFatContent",
                              "total": 0.0,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Monounsaturated",
                              "tag": "FAMS",
                              "schemaOrgTag": null,
                              "total": 20.89745407827,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Polyunsaturated",
                              "tag": "FAPU",
                              "schemaOrgTag": null,
                              "total": 7.71152388237,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          }
                      ]
                  },
                  {
                      "label": "Carbs",
                      "tag": "CHOCDF",
                      "schemaOrgTag": "carbohydrateContent",
                      "total": 275.557364775,
                      "hasRDI": true,
                      "daily": 91.85245492499999,
                      "unit": "g",
                      "sub": [
                          {
                              "label": "Carbs (net)",
                              "tag": "CHOCDF.net",
                              "schemaOrgTag": null,
                              "total": 193.910738175,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Fiber",
                              "tag": "FIBTG",
                              "schemaOrgTag": "fiberContent",
                              "total": 81.6466266,
                              "hasRDI": true,
                              "daily": 326.5865064,
                              "unit": "g"
                          },
                          {
                              "label": "Sugars",
                              "tag": "SUGAR",
                              "schemaOrgTag": "sugarContent",
                              "total": 0.0,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          },
                          {
                              "label": "Sugars, added",
                              "tag": "SUGAR.added",
                              "schemaOrgTag": null,
                              "total": 0.0,
                              "hasRDI": false,
                              "daily": 0.0,
                              "unit": "g"
                          }
                      ]
                  },
                  {
                      "label": "Protein",
                      "tag": "PROCNT",
                      "schemaOrgTag": "proteinContent",
                      "total": 67.9708166445,
                      "hasRDI": true,
                      "daily": 135.941633289,
                      "unit": "g"
                  },
                  {
                      "label": "Cholesterol",
                      "tag": "CHOLE",
                      "schemaOrgTag": "cholesterolContent",
                      "total": 0.0,
                      "hasRDI": true,
                      "daily": 0.0,
                      "unit": "mg"
                  },
                  {
                      "label": "Sodium",
                      "tag": "NA",
                      "schemaOrgTag": "sodiumContent",
                      "total": 4811.244913700961,
                      "hasRDI": true,
                      "daily": 200.46853807087336,
                      "unit": "mg"
                  },
                  {
                      "label": "Calcium",
                      "tag": "CA",
                      "schemaOrgTag": null,
                      "total": 512.9512880922483,
                      "hasRDI": true,
                      "daily": 51.29512880922483,
                      "unit": "mg"
                  },
                  {
                      "label": "Magnesium",
                      "tag": "MG",
                      "schemaOrgTag": null,
                      "total": 489.97902098799204,
                      "hasRDI": true,
                      "daily": 116.66167166380762,
                      "unit": "mg"
                  },
                  {
                      "label": "Potassium",
                      "tag": "K",
                      "schemaOrgTag": null,
                      "total": 4328.342899434376,
                      "hasRDI": true,
                      "daily": 92.092402115625,
                      "unit": "mg"
                  },
                  {
                      "label": "Iron",
                      "tag": "FE",
                      "schemaOrgTag": null,
                      "total": 19.579285252583762,
                      "hasRDI": true,
                      "daily": 108.77380695879869,
                      "unit": "mg"
                  },
                  {
                      "label": "Zinc",
                      "tag": "ZN",
                      "schemaOrgTag": null,
                      "total": 9.195171631299202,
                      "hasRDI": true,
                      "daily": 83.5924693754473,
                      "unit": "mg"
                  },
                  {
                      "label": "Phosphorus",
                      "tag": "P",
                      "schemaOrgTag": null,
                      "total": 1204.2877423500001,
                      "hasRDI": true,
                      "daily": 172.04110605000002,
                      "unit": "mg"
                  },
                  {
                      "label": "Vitamin A",
                      "tag": "VITA_RAE",
                      "schemaOrgTag": null,
                      "total": 5184.5607891,
                      "hasRDI": true,
                      "daily": 576.0623099,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin C",
                      "tag": "VITC",
                      "schemaOrgTag": null,
                      "total": 212.28122916,
                      "hasRDI": true,
                      "daily": 235.8680324,
                      "unit": "mg"
                  },
                  {
                      "label": "Thiamin (B1)",
                      "tag": "THIA",
                      "schemaOrgTag": null,
                      "total": 2.4902221113,
                      "hasRDI": true,
                      "daily": 207.518509275,
                      "unit": "mg"
                  },
                  {
                      "label": "Riboflavin (B2)",
                      "tag": "RIBF",
                      "schemaOrgTag": null,
                      "total": 1.7349908152500002,
                      "hasRDI": true,
                      "daily": 133.4608319423077,
                      "unit": "mg"
                  },
                  {
                      "label": "Niacin (B3)",
                      "tag": "NIA",
                      "schemaOrgTag": null,
                      "total": 25.5145708125,
                      "hasRDI": true,
                      "daily": 159.466067578125,
                      "unit": "mg"
                  },
                  {
                      "label": "Vitamin B6",
                      "tag": "VITB6A",
                      "schemaOrgTag": null,
                      "total": 1.9595190384,
                      "hasRDI": true,
                      "daily": 150.73223372307692,
                      "unit": "mg"
                  },
                  {
                      "label": "Folate equivalent (total)",
                      "tag": "FOLDFE",
                      "schemaOrgTag": null,
                      "total": 591.93804285,
                      "hasRDI": true,
                      "daily": 147.9845107125,
                      "unit": "µg"
                  },
                  {
                      "label": "Folate (food)",
                      "tag": "FOLFD",
                      "schemaOrgTag": null,
                      "total": 591.93804285,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Folic acid",
                      "tag": "FOLAC",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin B12",
                      "tag": "VITB12",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": true,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin D",
                      "tag": "VITD",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": true,
                      "daily": 0.0,
                      "unit": "µg"
                  },
                  {
                      "label": "Vitamin E",
                      "tag": "TOCPHA",
                      "schemaOrgTag": null,
                      "total": 3.997418838336,
                      "hasRDI": true,
                      "daily": 26.64945892224,
                      "unit": "mg"
                  },
                  {
                      "label": "Vitamin K",
                      "tag": "VITK1",
                      "schemaOrgTag": null,
                      "total": 16.711431532488,
                      "hasRDI": true,
                      "daily": 13.92619294374,
                      "unit": "µg"
                  },
                  {
                      "label": "Sugar alcohols",
                      "tag": "Sugar.alcohol",
                      "schemaOrgTag": null,
                      "total": 0.0,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "g"
                  },
                  {
                      "label": "Water",
                      "tag": "WATER",
                      "schemaOrgTag": null,
                      "total": 1675.8168632425984,
                      "hasRDI": false,
                      "daily": 0.0,
                      "unit": "g"
                  }
              ]
          },
          "_links": {
              "self": {
                  "href": "https://api.edamam.com/api/recipes/v2/637d0d9235eeaebfc3464318cc00e674?type=public&app_id=ab54757d&app_key=b3218f5346afe1f35a7cb3650de96b38",
                  "title": "Self"
              }
          }
      },
  ]
export default arr;