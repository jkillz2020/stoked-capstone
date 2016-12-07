"use strict";

app.factory('StokedFactory', function($q, $http, FIREBASE_CONFIG){

  var getStokeList=function(userId){
    return $q((resolve, reject)=>{
      $http.get(`${FIREBASE_CONFIG.databaseURL}/Stokes.json?orderBy="uid"&equalTo="${userId}"`)
        .success(function(response){
          console.log("response", response)
          let Stokes =[];
          Object.keys(response).forEach(function(key){
            response[key].id=key;
            Stokes.push(response[key]);
          });
          resolve(Stokes);
        })
        .error(function(errorResponse){
          reject(errorResponse);
        })
    })
  }

  var postNewStoke = function(newStoke){
    return $q((resolve, reject)=>{
      $http.post(`${FIREBASE_CONFIG.databaseURL}/Stokes.json`,
        JSON.stringify({
          city: newStoke.city,
          resortName: newStoke.resortName,
          rating: newStoke.rating,
          state: newStoke.state,
          streetAddress: newStoke.streetAddress,
          zipcode: newStoke.zipcode,
          uid: newStoke.uid
        })
      )
        .success(function(postResponse){
          resolve(postResponse);
        })
        .error(function(postError){
          reject(postError);
        })
    })
  }

  var deleteStoke =  function(stokeId){
    return $q((resolve, reject) => {
      $http.delete(`${FIREBASE_CONFIG.databaseURL}/Stokes/${stokeId}.json`)
      .success(function(deleteResponse){
        console.log("success")
        resolve(deleteResponse);
      })
      .error(function(deleteError){
        reject(deleteError);
      })
    })
  }

  var getSingleStoke =  function(stokeId){
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/Stokes/${stokeId}.json`)
      .success(function(getSingleResponse){
        console.log("success", getSingleResponse)
        resolve(getSingleResponse);
      })
      .error(function(getSingleError){
        reject(getSingleError);
      })
    })
  }


var editStoke = function(editStoke){
    return $q((resolve, reject)=>{
      $http.put(`${FIREBASE_CONFIG.databaseURL}/Stokes/${editStoke.id}.json`, 
        JSON.stringify({
          city: editStoke.city,
          resortName: editStoke.resortName,
          rating: editStoke.rating,
          state: editStoke.state,
          streetAddress: editStoke.streetAddress,
          zipcode: editStoke.zipcode,
          uid: editStoke.uid
      })
    )
      .success(function(editResponse){
        resolve(editResponse);
      })
      .error(function(editError){
        reject(editError);
      })
    })
  }


  return {getStokeList:getStokeList,
          postNewStoke:postNewStoke,
          deleteStoke:deleteStoke,
          getSingleStoke:getSingleStoke,
          editStoke:editStoke
        }
     
});
