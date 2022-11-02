(function(){
    var script = {
 "start": "this.init(); this.syncPlaylists([this.DropDown_32BD3923_2969_B08C_4126_C5BE3AC67B6C_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_398EFEDE_293F_71B4_41BB_675075858274].forEach(function(component) { component.set('visible', false); }) }",
 "downloadEnabled": true,
 "data": {
  "name": "Player5220"
 },
 "height": "100%",
 "id": "rootPlayer",
 "layout": "absolute",
 "minHeight": 20,
 "children": [
  "this.MainViewer",
  "this.Container_38E94383_28EF_7238_41A5_1AC22A69486E",
  "this.Container_38914236_2927_90F4_41C2_163A9E302ED5",
  "this.Container_3A922E1E_291A_B0B4_41A6_5D03188CC3A2",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 20,
 "desktopMipmappingEnabled": false,
 "propagateClick": false,
 "borderSize": 0,
 "paddingLeft": 0,
 "definitions": [{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_09667DCC_28E9_939B_41C2_B61F3F549470",
 "yaw": -32.88,
 "popupDistance": 100,
 "hfov": 10.33,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_09667DCC_28E9_939B_41C2_B61F3F549470_0_2.jpg",
    "width": 1024,
    "height": 768
   }
  ]
 },
 "pitch": 4.4,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer"
},
{
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)",
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_camera"
  },
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_32834F5A_2969_F0BC_41C2_5EED61594F42",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_325A316C_2919_909B_41C0_F9C9280BB1E6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_3471DA20_2929_908B_41A8_76B5DA8B657E",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_32B8A427_292B_9094_41B7_00FB8E85D65E",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_320C54A6_2919_B197_418F_3F8115350585",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_320C54A6_2919_B197_418F_3F8115350585_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_36C95A18_291A_90BB_41C2_0557EA35935F",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_36C95A18_291A_90BB_41C2_0557EA35935F_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)",
   "media": "this.panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_camera"
},
{
 "class": "FadeInEffect",
 "easing": "linear",
 "id": "effect_3F5D0ED6_291B_B1B7_41B6_75CB8517CAA5",
 "duration": 500
},
{
 "thumbnailUrl": "media/album_32834F5A_2969_F0BC_41C2_5EED61594F42_1_t.jpg",
 "duration": 1000,
 "label": "IMG_1243",
 "id": "album_32834F5A_2969_F0BC_41C2_5EED61594F42_1",
 "width": 4032,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_32834F5A_2969_F0BC_41C2_5EED61594F42_1.JPG"
   }
  ]
 },
 "class": "Photo",
 "height": 3024
},
{
 "class": "ImageResource",
 "id": "ImageResource_363750AE_28EE_9194_41C3_9676F0147613",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_09667DCC_28E9_939B_41C2_B61F3F549470_0_0.jpg",
   "width": 4032,
   "height": 3024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_09667DCC_28E9_939B_41C2_B61F3F549470_0_1.jpg",
   "width": 2048,
   "height": 1536
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_09667DCC_28E9_939B_41C2_B61F3F549470_0_2.jpg",
   "width": 1024,
   "height": 768
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_09667DCC_28E9_939B_41C2_B61F3F549470_0_3.jpg",
   "width": 512,
   "height": 384
  }
 ]
},
{
 "thumbnailUrl": "media/album_32834F5A_2969_F0BC_41C2_5EED61594F42_8_t.jpg",
 "duration": 1000,
 "label": "IMG_1275",
 "id": "album_32834F5A_2969_F0BC_41C2_5EED61594F42_8",
 "width": 4032,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_32834F5A_2969_F0BC_41C2_5EED61594F42_8.JPG"
   }
  ]
 },
 "class": "Photo",
 "height": 3024
},
{
 "thumbnailUrl": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "2.3 RANU PANI",
 "id": "panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3471DA20_2929_908B_41A8_76B5DA8B657E",
   "backwardYaw": -123.65,
   "yaw": -89.35,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_32B8A427_292B_9094_41B7_00FB8E85D65E"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_34CCBA55_2927_70B5_41B5_3316D40C9ECD",
  "this.overlay_32EBEEF1_2927_918C_41A6_8362CAA69E87",
  "this.overlay_35134A8E_2929_B197_4199_BA04C31EA35E"
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/album_32834F5A_2969_F0BC_41C2_5EED61594F42_4_t.jpg",
 "duration": 1000,
 "label": "IMG_1250",
 "id": "album_32834F5A_2969_F0BC_41C2_5EED61594F42_4",
 "width": 4032,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_32834F5A_2969_F0BC_41C2_5EED61594F42_4.JPG"
   }
  ]
 },
 "class": "Photo",
 "height": 3024
},
{
 "thumbnailUrl": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "4.1 RANU REGULO",
 "id": "panorama_36C95A18_291A_90BB_41C2_0557EA35935F",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_353CADFC_28E6_F37B_41C3_0439272445E0",
  "this.popup_09667DCC_28E9_939B_41C2_B61F3F549470",
  "this.overlay_084996CA_28E9_719F_4169_CF1B4CD0B1B2"
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/album_32834F5A_2969_F0BC_41C2_5EED61594F42_t.png",
 "playList": "this.album_32834F5A_2969_F0BC_41C2_5EED61594F42_AlbumPlayList",
 "class": "PhotoAlbum",
 "label": "Photo",
 "id": "album_32834F5A_2969_F0BC_41C2_5EED61594F42"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 90.65,
  "pitch": 0
 },
 "id": "camera_39C042A7_35B0_F359_41B6_D3BC618AAC20"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90,
  "hfov": 165
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear",
   "duration": 2000
  },
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out",
   "targetPitch": 0,
   "targetStereographicFactor": 0,
   "duration": 2000
  }
 ],
 "id": "panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_camera"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.DropDown_32BD3923_2969_B08C_4126_C5BE3AC67B6C_playlist, 0, 1)",
   "media": "this.panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_32BD3923_2969_B08C_4126_C5BE3AC67B6C_playlist, 1, 2)",
   "media": "this.panorama_325A316C_2919_909B_41C0_F9C9280BB1E6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_32BD3923_2969_B08C_4126_C5BE3AC67B6C_playlist, 2, 3)",
   "media": "this.panorama_3471DA20_2929_908B_41A8_76B5DA8B657E",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_32BD3923_2969_B08C_4126_C5BE3AC67B6C_playlist, 3, 4)",
   "media": "this.panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_32BD3923_2969_B08C_4126_C5BE3AC67B6C_playlist, 4, 5)",
   "media": "this.panorama_32B8A427_292B_9094_41B7_00FB8E85D65E",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_32BD3923_2969_B08C_4126_C5BE3AC67B6C_playlist, 5, 6)",
   "media": "this.panorama_320C54A6_2919_B197_418F_3F8115350585",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_320C54A6_2919_B197_418F_3F8115350585_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_32BD3923_2969_B08C_4126_C5BE3AC67B6C_playlist, 6, 7)",
   "media": "this.panorama_36C95A18_291A_90BB_41C2_0557EA35935F",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_36C95A18_291A_90BB_41C2_0557EA35935F_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_32BD3923_2969_B08C_4126_C5BE3AC67B6C_playlist, 7, 0)",
   "media": "this.panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_camera"
  }
 ],
 "id": "DropDown_32BD3923_2969_B08C_4126_C5BE3AC67B6C_playlist"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_322945A4_291A_9394_41BE_0446497C0D28",
 "yaw": -16.7,
 "popupDistance": 100,
 "hfov": 3.87,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_322945A4_291A_9394_41BE_0446497C0D28_0_2.jpg",
    "width": 1024,
    "height": 768
   }
  ]
 },
 "pitch": 4.37,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "thumbnailUrl": "media/album_32834F5A_2969_F0BC_41C2_5EED61594F42_2_t.jpg",
 "duration": 1000,
 "label": "IMG_1244",
 "id": "album_32834F5A_2969_F0BC_41C2_5EED61594F42_2",
 "width": 4032,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_32834F5A_2969_F0BC_41C2_5EED61594F42_2.JPG"
   }
  ]
 },
 "class": "Photo",
 "height": 3024
},
{
 "thumbnailUrl": "media/album_32834F5A_2969_F0BC_41C2_5EED61594F42_9_t.jpg",
 "duration": 1000,
 "label": "IMG_1285",
 "id": "album_32834F5A_2969_F0BC_41C2_5EED61594F42_9",
 "width": 4032,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_32834F5A_2969_F0BC_41C2_5EED61594F42_9.JPG"
   }
  ]
 },
 "class": "Photo",
 "height": 3024
},
{
 "thumbnailUrl": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "2.1 RANU PANI",
 "id": "panorama_3471DA20_2929_908B_41A8_76B5DA8B657E",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086",
   "backwardYaw": -89.35,
   "yaw": -123.65,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_320C54A6_2919_B197_418F_3F8115350585"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_09960343_2939_B08D_41C0_D363D0566D09",
  "this.overlay_330EC2B1_293A_918C_41A1_E4C72DE1907F",
  "this.overlay_341846C9_2939_919C_41AF_F73EFB463625",
  "this.overlay_3704B531_2939_B08D_41BF_975935B7270E"
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "pitch": 0
},
{
 "class": "ImageResource",
 "id": "ImageResource_37402094_2927_71B4_41C1_CA3DF8A2231B",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_322945A4_291A_9394_41BE_0446497C0D28_0_0.jpg",
   "width": 3016,
   "height": 2263
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_322945A4_291A_9394_41BE_0446497C0D28_0_1.jpg",
   "width": 2048,
   "height": 1536
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_322945A4_291A_9394_41BE_0446497C0D28_0_2.jpg",
   "width": 1024,
   "height": 768
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_322945A4_291A_9394_41BE_0446497C0D28_0_3.jpg",
   "width": 512,
   "height": 384
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 122.97,
  "pitch": 0
 },
 "id": "camera_385C623A_35B0_F3AB_41AD_B2B13F62720B"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 54.35,
  "pitch": 0
 },
 "id": "camera_384B6259_35B0_F3E9_41C9_08F5E83D0F17"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 56.35,
  "pitch": 0
 },
 "id": "camera_38476249_35B0_F3E9_413F_65DA148F4328"
},
{
 "class": "ImageResource",
 "id": "ImageResource_363580AE_28EE_9194_41C3_09F7A6FD51C0",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_081165E8_28EE_B39C_419C_1A93E85B698C_0_0.jpg",
   "width": 4032,
   "height": 3024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_081165E8_28EE_B39C_419C_1A93E85B698C_0_1.jpg",
   "width": 2048,
   "height": 1536
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_081165E8_28EE_B39C_419C_1A93E85B698C_0_2.jpg",
   "width": 1024,
   "height": 768
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_081165E8_28EE_B39C_419C_1A93E85B698C_0_3.jpg",
   "width": 512,
   "height": 384
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -8.18,
  "pitch": -86.73
 },
 "id": "panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_camera"
},
{
 "mouseControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "buttonCardboardView": "this.IconButton_3F988197_2967_73B5_41B5_CD804C8C61C3",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeEnabled": true
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_camera"
},
{
 "thumbnailUrl": "media/album_32834F5A_2969_F0BC_41C2_5EED61594F42_0_t.jpg",
 "duration": 1000,
 "label": "IMG_1242",
 "id": "album_32834F5A_2969_F0BC_41C2_5EED61594F42_0",
 "width": 4032,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_32834F5A_2969_F0BC_41C2_5EED61594F42_0.JPG"
   }
  ]
 },
 "class": "Photo",
 "height": 3024
},
{
 "thumbnailUrl": "media/album_32834F5A_2969_F0BC_41C2_5EED61594F42_7_t.jpg",
 "duration": 1000,
 "label": "IMG_1274",
 "id": "album_32834F5A_2969_F0BC_41C2_5EED61594F42_7",
 "width": 4032,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_32834F5A_2969_F0BC_41C2_5EED61594F42_7.JPG"
   }
  ]
 },
 "class": "Photo",
 "height": 3024
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_320C54A6_2919_B197_418F_3F8115350585_camera"
},
{
 "thumbnailUrl": "media/album_32834F5A_2969_F0BC_41C2_5EED61594F42_3_t.jpg",
 "duration": 1000,
 "label": "IMG_1245",
 "id": "album_32834F5A_2969_F0BC_41C2_5EED61594F42_3",
 "width": 4032,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_32834F5A_2969_F0BC_41C2_5EED61594F42_3.JPG"
   }
  ]
 },
 "class": "Photo",
 "height": 3024
},
{
 "thumbnailUrl": "media/album_32834F5A_2969_F0BC_41C2_5EED61594F42_5_t.jpg",
 "duration": 1000,
 "label": "IMG_1251",
 "id": "album_32834F5A_2969_F0BC_41C2_5EED61594F42_5",
 "width": 4032,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_32834F5A_2969_F0BC_41C2_5EED61594F42_5.JPG"
   }
  ]
 },
 "class": "Photo",
 "height": 3024
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_36C95A18_291A_90BB_41C2_0557EA35935F_camera"
},
{
 "thumbnailUrl": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_t.jpg",
 "class": "Panorama",
 "label": "3.RANU PANI VIEW",
 "id": "panorama_32B8A427_292B_9094_41B7_00FB8E85D65E",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_352CC7C6_292A_FF97_41A3_B18C2BE4C512",
  "this.overlay_33A44077_2929_B174_41B5_9F1420D36B0C"
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_t.jpg",
 "class": "Panorama",
 "label": "4.2 RANU REGULO",
 "id": "panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_3575221A_28EE_F0BC_41BA_FB88115A3B0D",
  "this.popup_081165E8_28EE_B39C_419C_1A93E85B698C"
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_camera"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_081165E8_28EE_B39C_419C_1A93E85B698C",
 "yaw": 3.93,
 "popupDistance": 100,
 "hfov": 8.92,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_081165E8_28EE_B39C_419C_1A93E85B698C_0_2.jpg",
    "width": 1024,
    "height": 768
   }
  ]
 },
 "pitch": -2.67,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "thumbnailUrl": "media/album_32834F5A_2969_F0BC_41C2_5EED61594F42_6_t.jpg",
 "duration": 1000,
 "label": "IMG_1270",
 "id": "album_32834F5A_2969_F0BC_41C2_5EED61594F42_6",
 "width": 4032,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_32834F5A_2969_F0BC_41C2_5EED61594F42_6.JPG"
   }
  ]
 },
 "class": "Photo",
 "height": 3024
},
{
 "class": "FadeOutEffect",
 "easing": "linear",
 "id": "effect_3F5D1ED7_291B_B1B5_41BF_E0AAB5111476",
 "duration": 500
},
{
 "thumbnailUrl": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "2. RANU PANI",
 "id": "panorama_325A316C_2919_909B_41C0_F9C9280BB1E6",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3471DA20_2929_908B_41A8_76B5DA8B657E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249",
   "backwardYaw": -57.03,
   "yaw": -125.65,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_37E83600_292A_F08C_41AD_3AA52A6A3430",
  "this.overlay_3486E05E_292F_90B7_41C4_427E91776A35"
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "4. RANU REGULO",
 "id": "panorama_320C54A6_2919_B197_418F_3F8115350585",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_36C95A18_291A_90BB_41C2_0557EA35935F"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_36FCE282_291A_B18C_41BB_6AC092F359B2"
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "1. POS RANU PANI",
 "id": "panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_325A316C_2919_909B_41C0_F9C9280BB1E6",
   "backwardYaw": -125.65,
   "yaw": -57.03,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_34A402AF_291A_9195_41BC_E7678A40030C",
  "this.popup_322945A4_291A_9394_41BE_0446497C0D28",
  "this.overlay_3628CB28_291A_F09C_41B5_61E5FCDA5FFF"
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "pitch": 0
},
{
 "progressBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "minHeight": 50,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 6,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "right": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 5,
 "borderSize": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#000000",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "minWidth": 100,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "bottom": "0%",
 "toolTipFontFamily": "Arial",
 "top": 0,
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "id": "Container_38E94383_28EF_7238_41A5_1AC22A69486E",
 "left": "0%",
 "layout": "horizontal",
 "minHeight": 1,
 "backgroundOpacity": 0.81,
 "children": [
  "this.Container_24BC49FF_28EF_7374_41B6_82C6FBD20294",
  "this.Container_25A54BA5_28FB_9794_41B8_2E8217EEF9BB"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "bottom": "85%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "header"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_38914236_2927_90F4_41C2_163A9E302ED5",
 "left": "0%",
 "layout": "horizontal",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "children": [
  "this.Container_3967A300_2939_708C_4188_CA700651F500",
  "this.Container_3AD731D5_2939_93B4_41C1_13BBBF0B7FAC",
  "this.Container_38943A41_2939_908D_41C0_B94BB7C043BF"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "bottom": "0%",
 "backgroundColorRatios": [
  0.21
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "93%",
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "navbar"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.TabPanel_38DD7B53_2919_908C_41BE_5228B6AE5008"
 ],
 "id": "Container_3A922E1E_291A_B0B4_41A6_5D03188CC3A2",
 "left": "0%",
 "layout": "horizontal",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "top": "15%",
 "bottom": "7%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "Container",
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "data": {
  "name": "body"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "minHeight": 0,
 "backgroundOpacity": 0.55,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "right": 0,
 "minWidth": 0,
 "propagateClick": false,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": 0,
 "class": "UIComponent",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "UIComponent1295"
 },
 "paddingTop": 0,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "minHeight": 0,
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "right": 0,
 "minWidth": 0,
 "propagateClick": false,
 "bottom": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": 0,
 "class": "ZoomImage",
 "backgroundColorRatios": [],
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "ZoomImage1296"
 },
 "paddingTop": 0,
 "visible": false,
 "scaleMode": "custom"
},
{
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "CloseButton1297"
 },
 "id": "closeButtonPopupPanorama",
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "layout": "horizontal",
 "pressedIconColor": "#888888",
 "minHeight": 0,
 "iconWidth": 20,
 "backgroundOpacity": 0.3,
 "shadowSpread": 1,
 "iconHeight": 20,
 "shadow": false,
 "paddingBottom": 5,
 "borderRadius": 0,
 "right": 10,
 "iconColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 0,
 "iconBeforeLabel": true,
 "propagateClick": false,
 "fontStyle": "normal",
 "rollOverIconColor": "#666666",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 5,
 "fontWeight": "normal",
 "mode": "push",
 "paddingRight": 5,
 "top": 10,
 "class": "CloseButton",
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "fontSize": "1.29vmin",
 "label": "",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 5,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "iconLineWidth": 5
},
{
 "data": {
  "name": "fs button"
 },
 "iconURL": "skin/IconButton_398EFEDE_293F_71B4_41BB_675075858274.png",
 "id": "IconButton_398EFEDE_293F_71B4_41BB_675075858274",
 "toolTipShadowColor": "#333333",
 "toolTipPaddingTop": 4,
 "toolTipBorderSize": 1,
 "minHeight": 1,
 "width": 48,
 "shadow": false,
 "toolTipShadowHorizontalLength": 0,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingRight": 6,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipShadowOpacity": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 128,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "toolTipBorderRadius": 3,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 30,
 "toolTipShadowSpread": 0,
 "class": "IconButton",
 "click": "if(!this.Container_38E94383_28EF_7238_41A5_1AC22A69486E.get('visible')){ this.setComponentVisibility(this.Container_38E94383_28EF_7238_41A5_1AC22A69486E, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_38E94383_28EF_7238_41A5_1AC22A69486E, false, 0, null, null, false) }; if(!this.Container_24BC49FF_28EF_7374_41B6_82C6FBD20294.get('visible')){ this.setComponentVisibility(this.Container_24BC49FF_28EF_7374_41B6_82C6FBD20294, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_24BC49FF_28EF_7374_41B6_82C6FBD20294, false, 0, null, null, false) }; if(!this.Image_25812B76_28FE_9777_41AC_CD6053AF6997.get('visible')){ this.setComponentVisibility(this.Image_25812B76_28FE_9777_41AC_CD6053AF6997, true, 0, null, null, false) } else { this.setComponentVisibility(this.Image_25812B76_28FE_9777_41AC_CD6053AF6997, false, 0, null, null, false) }; if(!this.Container_25A54BA5_28FB_9794_41B8_2E8217EEF9BB.get('visible')){ this.setComponentVisibility(this.Container_25A54BA5_28FB_9794_41B8_2E8217EEF9BB, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_25A54BA5_28FB_9794_41B8_2E8217EEF9BB, false, 0, null, null, false) }; if(!this.Image_39C654F5_292B_F174_41B5_95A3AD6C1E45.get('visible')){ this.setComponentVisibility(this.Image_39C654F5_292B_F174_41B5_95A3AD6C1E45, true, 0, null, null, false) } else { this.setComponentVisibility(this.Image_39C654F5_292B_F174_41B5_95A3AD6C1E45, false, 0, null, null, false) }",
 "maxHeight": 128,
 "toolTipBorderColor": "#767676",
 "toolTip": "Fullscreen",
 "transparencyActive": true,
 "horizontalAlign": "center",
 "toolTipOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3715E4E9_292F_919C_4162_BED593BD4A14",
   "pitch": 0.26,
   "yaw": 91.11,
   "hfov": 7.92,
   "distance": 100
  }
 ],
 "id": "overlay_34CCBA55_2927_70B5_41B5_3316D40C9ECD",
 "data": {
  "label": "Circle Point 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 91.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.26,
   "hfov": 7.92
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "RANU PANI VIEW"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0_HS_1_0.png",
      "width": 615,
      "height": 114
     }
    ]
   },
   "pitch": 7.33,
   "yaw": 91.34,
   "hfov": 25.27,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_32EBEEF1_2927_918C_41A6_8362CAA69E87",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 91.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0_HS_1_0_map.gif",
      "width": 86,
      "height": 16
     }
    ]
   },
   "pitch": 7.33,
   "hfov": 25.27
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3471DA20_2929_908B_41A8_76B5DA8B657E, this.camera_38476249_35B0_F3E9_413F_65DA148F4328); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_371584E9_292F_919C_41B0_1D3F5AEEA6A5",
   "pitch": -1.25,
   "yaw": -89.35,
   "hfov": 7.06,
   "distance": 100
  }
 ],
 "id": "overlay_35134A8E_2929_B197_4199_BA04C31EA35E",
 "data": {
  "label": "Circle Point 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.25,
   "hfov": 7.06
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_09667DCC_28E9_939B_41C2_B61F3F549470, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_363750AE_28EE_9194_41C3_9676F0147613, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_363BB07F_28EE_9174_41C3_9C05CDC4DA08",
   "pitch": 4.4,
   "yaw": -32.88,
   "hfov": 10.33,
   "distance": 100
  }
 ],
 "id": "overlay_353CADFC_28E6_F37B_41C3_0439272445E0",
 "data": {
  "label": "Info 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -32.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.4,
   "hfov": 10.33
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_363BD07F_28EE_9174_417C_11D766679721",
   "pitch": 2.67,
   "yaw": -66.91,
   "hfov": 4.04,
   "distance": 100
  }
 ],
 "id": "overlay_084996CA_28E9_719F_4169_CF1B4CD0B1B2",
 "data": {
  "label": "Circle Point 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -66.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 2.67,
   "hfov": 4.04
  }
 ]
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_32834F5A_2969_F0BC_41C2_5EED61594F42_0",
   "camera": {
    "easing": "linear",
    "duration": 1000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.53",
     "zoomFactor": 1.1,
     "y": "0.72"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_32834F5A_2969_F0BC_41C2_5EED61594F42_1",
   "camera": {
    "easing": "linear",
    "duration": 1000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.48",
     "zoomFactor": 1.1,
     "y": "0.48"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_32834F5A_2969_F0BC_41C2_5EED61594F42_2",
   "camera": {
    "easing": "linear",
    "duration": 1000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.27",
     "zoomFactor": 1.1,
     "y": "0.47"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_32834F5A_2969_F0BC_41C2_5EED61594F42_3",
   "camera": {
    "easing": "linear",
    "duration": 1000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.49",
     "zoomFactor": 1.1,
     "y": "0.37"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_32834F5A_2969_F0BC_41C2_5EED61594F42_4",
   "camera": {
    "easing": "linear",
    "duration": 1000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.59",
     "zoomFactor": 1.1,
     "y": "0.29"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_32834F5A_2969_F0BC_41C2_5EED61594F42_5",
   "camera": {
    "easing": "linear",
    "duration": 1000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.58",
     "zoomFactor": 1.1,
     "y": "0.59"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_32834F5A_2969_F0BC_41C2_5EED61594F42_6",
   "camera": {
    "easing": "linear",
    "duration": 1000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.73",
     "zoomFactor": 1.1,
     "y": "0.38"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_32834F5A_2969_F0BC_41C2_5EED61594F42_7",
   "camera": {
    "easing": "linear",
    "duration": 1000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.51",
     "zoomFactor": 1.1,
     "y": "0.28"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_32834F5A_2969_F0BC_41C2_5EED61594F42_8",
   "camera": {
    "easing": "linear",
    "duration": 1000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.30",
     "zoomFactor": 1.1,
     "y": "0.36"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_32834F5A_2969_F0BC_41C2_5EED61594F42_9",
   "camera": {
    "easing": "linear",
    "duration": 1000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.69",
     "zoomFactor": 1.1,
     "y": "0.48"
    },
    "scaleMode": "fit_outside"
   }
  }
 ],
 "id": "album_32834F5A_2969_F0BC_41C2_5EED61594F42_AlbumPlayList"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3486942E_293A_9097_419D_66B5F538F98D",
   "pitch": -2,
   "yaw": 0.43,
   "hfov": 10.46,
   "distance": 100
  }
 ],
 "id": "overlay_09960343_2939_B08D_41C0_D363D0566D09",
 "data": {
  "label": "Circle Point 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2,
   "hfov": 10.46
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "RANU REGULO"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0_HS_1_0.png",
      "width": 700,
      "height": 147
     }
    ]
   },
   "pitch": 5.36,
   "yaw": 0.19,
   "hfov": 28.85,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_330EC2B1_293A_918C_41A1_E4C72DE1907F",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0_HS_1_0_map.gif",
      "width": 76,
      "height": 16
     }
    ]
   },
   "pitch": 5.36,
   "hfov": 28.85
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086, this.camera_39C042A7_35B0_F359_41B6_D3BC618AAC20); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3486342E_293A_9097_418D_5B1858F72046",
   "pitch": -3.13,
   "yaw": -123.65,
   "hfov": 8.96,
   "distance": 100
  }
 ],
 "id": "overlay_341846C9_2939_919C_41AF_F73EFB463625",
 "data": {
  "label": "Circle Point 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -123.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.13,
   "hfov": 8.96
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "RANU PANI VIEW"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0_HS_3_0.png",
      "width": 615,
      "height": 165
     }
    ]
   },
   "pitch": 3.76,
   "yaw": -123.45,
   "hfov": 25.4,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_3704B531_2939_B08D_41BF_975935B7270E",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -123.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0_HS_3_0_map.gif",
      "width": 59,
      "height": 16
     }
    ]
   },
   "pitch": 3.76,
   "hfov": 25.4
  }
 ]
},
{
 "data": {
  "name": "vr botton"
 },
 "iconURL": "skin/IconButton_3F988197_2967_73B5_41B5_CD804C8C61C3.png",
 "id": "IconButton_3F988197_2967_73B5_41B5_CD804C8C61C3",
 "minHeight": 1,
 "width": 47,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 56,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 42,
 "class": "IconButton",
 "maxHeight": 56,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_371424E9_292F_919C_4180_12A392CB7B9C",
   "pitch": 1.15,
   "yaw": -12.5,
   "hfov": 18.91,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_352CC7C6_292A_FF97_41A3_B18C2BE4C512",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.15,
   "hfov": 18.91
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "RANU PANI VIEW"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_1_HS_1_0.png",
      "width": 1219,
      "height": 236
     }
    ]
   },
   "pitch": 17.02,
   "yaw": -10.84,
   "hfov": 48.25,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_33A44077_2929_B174_41B5_9F1420D36B0C",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_1_HS_1_0_map.gif",
      "width": 82,
      "height": 16
     }
    ]
   },
   "pitch": 17.02,
   "hfov": 48.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_081165E8_28EE_B39C_419C_1A93E85B698C, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_363580AE_28EE_9194_41C3_09F7A6FD51C0, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_363B607F_28EE_9174_41A9_8A2B0D0E15FF",
   "pitch": -2.67,
   "yaw": 3.93,
   "hfov": 8.92,
   "distance": 100
  }
 ],
 "id": "overlay_3575221A_28EE_F0BC_41BA_FB88115A3B0D",
 "data": {
  "label": "Info 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.67,
   "hfov": 8.92
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_346C9E43_292B_B08C_41B6_28F64883EB38",
   "pitch": -6.77,
   "yaw": 61,
   "hfov": 12.19,
   "distance": 100
  }
 ],
 "id": "overlay_37E83600_292A_F08C_41AD_3AA52A6A3430",
 "data": {
  "label": "Circle Point 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.77,
   "hfov": 12.19
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249, this.camera_385C623A_35B0_F3AB_41AD_B2B13F62720B); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_346F7E43_292B_B08C_41B9_A87C00197815",
   "pitch": -0.47,
   "yaw": -125.65,
   "hfov": 12.27,
   "distance": 100
  }
 ],
 "id": "overlay_3486E05E_292F_90B7_41C4_427E91776A35",
 "data": {
  "label": "Circle Point 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -125.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.47,
   "hfov": 12.27
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_096A6672_2919_708F_41B3_2E4E09EA0C45",
   "pitch": 2.69,
   "yaw": -54.57,
   "hfov": 6.27,
   "distance": 100
  }
 ],
 "id": "overlay_36FCE282_291A_B18C_41BB_6AC092F359B2",
 "data": {
  "label": "Circle Point 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -54.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 2.69,
   "hfov": 6.27
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_322945A4_291A_9394_41BE_0446497C0D28, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_37402094_2927_71B4_41C1_CA3DF8A2231B, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3746F085_2927_7195_41BB_2D4289DCC4A3",
   "pitch": 4.37,
   "yaw": -16.7,
   "hfov": 3.87,
   "distance": 100
  }
 ],
 "id": "overlay_34A402AF_291A_9195_41BC_E7678A40030C",
 "data": {
  "label": "Info 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.37,
   "hfov": 3.87
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_325A316C_2919_909B_41C0_F9C9280BB1E6, this.camera_384B6259_35B0_F3E9_41C9_08F5E83D0F17); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_37457085_2927_7195_4196_04F57728A862",
   "pitch": 2.25,
   "yaw": -57.03,
   "hfov": 3.64,
   "distance": 100
  }
 ],
 "id": "overlay_3628CB28_291A_F09C_41B5_61E5FCDA5FFF",
 "data": {
  "label": "Circle Point 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -57.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 2.25,
   "hfov": 3.64
  }
 ]
},
{
 "children": [
  "this.Image_25812B76_28FE_9777_41AC_CD6053AF6997",
  "this.HTMLText_3BF32F27_29E7_F094_41B4_C7DB273CBF8B"
 ],
 "layout": "horizontal",
 "id": "Container_24BC49FF_28EF_7374_41B6_82C6FBD20294",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "50%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "Container",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "left"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "children": [
  "this.Image_39C654F5_292B_F174_41B5_95A3AD6C1E45"
 ],
 "layout": "horizontal",
 "id": "Container_25A54BA5_28FB_9794_41B8_2E8217EEF9BB",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "width": "50%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "Container",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "right"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "children": [
  "this.IconButton_3A845007_293A_9094_41B7_A61CAE91D8B6"
 ],
 "layout": "horizontal",
 "id": "Container_3967A300_2939_708C_4188_CA700651F500",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "width": "33.33%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "Container",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "right"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "children": [
  "this.DropDown_32BD3923_2969_B08C_4126_C5BE3AC67B6C"
 ],
 "layout": "absolute",
 "id": "Container_3AD731D5_2939_93B4_41C1_13BBBF0B7FAC",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "width": "33.33%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "Container",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "mid"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "children": [
  "this.IconButton_307A9C91_297A_918C_41C3_CE13024B1C16",
  "this.IconButton_3F988197_2967_73B5_41B5_CD804C8C61C3",
  "this.IconButton_398EFEDE_293F_71B4_41BB_675075858274"
 ],
 "layout": "horizontal",
 "id": "Container_38943A41_2939_908D_41C0_B94BB7C043BF",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "width": "33.33%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "Container",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "left"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "tabsRollOverBackgroundColorRatios": [
  1
 ],
 "tabsBackgroundOpacity": 0.65,
 "selectedTabBackgroundColor": [
  "#FFFFFF"
 ],
 "tabsFontStyle": "normal",
 "height": "90%",
 "tabsTextDecoration": "none",
 "id": "TabPanel_38DD7B53_2919_908C_41BE_5228B6AE5008",
 "pagePaddingRight": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "tabsRollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "overflow": "visible",
 "borderRadius": 5,
 "minWidth": 1,
 "tabsFontColor": "#333333",
 "selectedTabBackgroundOpacity": 1,
 "pagePaddingLeft": 0,
 "propagateClick": false,
 "tabsFontWeight": "normal",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "width": "90%",
 "tabsRollOverFontWeight": "bold",
 "tabsFontFamily": "Arial",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "TabPanel",
 "selectedTabFontColor": "#000000",
 "tabsBackgroundColorRatios": [
  1
 ],
 "tabsBackgroundColor": [
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "selectedTabBackgroundColorRatios": [
  0
 ],
 "tabsAlign": "normal",
 "tabsPosition": "top",
 "tabsFontSize": 12,
 "tabsSize": 30,
 "pagePaddingBottom": 0,
 "selectedTabFontWeight": "bold",
 "tabsRollOverBackgroundOpacity": 0.78,
 "scrollBarMargin": 2,
 "data": {
  "name": "tabs"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "tabsRollOverFontColor": "#000000",
 "pagePaddingTop": 0,
 "pages": [
  "this.component_3B06DDD8_297B_73BC_41C2_6D5F11C8806D",
  "this.component_3B06FDD8_297B_73BC_41B1_A5FD4879E4ED",
  "this.component_3B062DD8_297B_73BC_41BB_0A8FBB1C6AB7"
 ]
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0_HS_0_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3715E4E9_292F_919C_4162_BED593BD4A14",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_3375675D_293E_F0B4_41B6_8FD8E6E7F086_0_HS_2_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_371584E9_292F_919C_41B0_1D3F5AEEA6A5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0_HS_0_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_363BB07F_28EE_9174_41C3_9C05CDC4DA08",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_36C95A18_291A_90BB_41C2_0557EA35935F_0_HS_1_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_363BD07F_28EE_9174_417C_11D766679721",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0_HS_0_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3486942E_293A_9097_419D_66B5F538F98D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_3471DA20_2929_908B_41A8_76B5DA8B657E_0_HS_2_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3486342E_293A_9097_418D_5B1858F72046",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_32B8A427_292B_9094_41B7_00FB8E85D65E_1_HS_0_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_371424E9_292F_919C_4180_12A392CB7B9C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_3666F50A_28EB_F09F_41AC_E2F581D05F7C_1_HS_0_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_363B607F_28EE_9174_41A9_8A2B0D0E15FF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0_HS_0_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_346C9E43_292B_B08C_41B6_28F64883EB38",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_325A316C_2919_909B_41C0_F9C9280BB1E6_0_HS_1_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_346F7E43_292B_B08C_41B9_A87C00197815",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_320C54A6_2919_B197_418F_3F8115350585_0_HS_0_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_096A6672_2919_708F_41B3_2E4E09EA0C45",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0_HS_0_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3746F085_2927_7195_41BB_2D4289DCC4A3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_38F3F0D5_28E9_4FD8_41B4_282B20544249_0_HS_1_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_37457085_2927_7195_4196_04F57728A862",
 "frameDuration": 41
},
{
 "id": "Image_25812B76_28FE_9777_41AC_CD6053AF6997",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 960,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "14.625%",
 "height": "100%",
 "url": "skin/Image_25812B76_28FE_9777_41AC_CD6053AF6997.png",
 "class": "Image",
 "maxHeight": 960,
 "horizontalAlign": "center",
 "data": {
  "name": "Image4870"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "id": "HTMLText_3BF32F27_29E7_F094_41B4_C7DB273CBF8B",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "83.426%",
 "scrollBarOpacity": 0.5,
 "borderSize": 3,
 "class": "HTMLText",
 "height": "98.889%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:20px;font-family:'Segoe UI Bold';\"><B>TAMAN NASIONAL</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:20px;font-family:'Segoe UI Bold';\"><B>BROMO TENGGER</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:20px;font-family:'Segoe UI Bold';\"><B>SEMERU</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText1580"
 },
 "paddingTop": 10
},
{
 "id": "Image_39C654F5_292B_F174_41B5_95A3AD6C1E45",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 340,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "40.402%",
 "height": "77.778%",
 "url": "skin/Image_39C654F5_292B_F174_41B5_95A3AD6C1E45.png",
 "class": "Image",
 "maxHeight": 129,
 "horizontalAlign": "right",
 "data": {
  "name": "Image9870"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "iconURL": "skin/IconButton_3A845007_293A_9094_41B7_A61CAE91D8B6.png",
 "id": "IconButton_3A845007_293A_9094_41B7_A61CAE91D8B6",
 "minHeight": 1,
 "width": 47,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 104,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 37,
 "class": "IconButton",
 "click": "if(!this.TabPanel_38DD7B53_2919_908C_41BE_5228B6AE5008.get('visible')){ this.setComponentVisibility(this.TabPanel_38DD7B53_2919_908C_41BE_5228B6AE5008, true, 0, this.effect_3F5D0ED6_291B_B1B7_41B6_75CB8517CAA5, 'showEffect', false) } else { this.setComponentVisibility(this.TabPanel_38DD7B53_2919_908C_41BE_5228B6AE5008, false, 0, this.effect_3F5D1ED7_291B_B1B5_41BF_E0AAB5111476, 'hideEffect', false) }",
 "maxHeight": 104,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "info button"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "fontFamily": "Arial",
 "popUpShadowOpacity": 0,
 "fontWeight": "normal",
 "data": {
  "name": "DropDown1204"
 },
 "id": "DropDown_32BD3923_2969_B08C_4126_C5BE3AC67B6C",
 "left": "0%",
 "fontStyle": "normal",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "popUpShadowColor": "#000000",
 "minHeight": 20,
 "backgroundOpacity": 0.3,
 "popUpFontColor": "#000000",
 "playList": "this.DropDown_32BD3923_2969_B08C_4126_C5BE3AC67B6C_playlist",
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "right": "0%",
 "minWidth": 200,
 "popUpShadowSpread": 1,
 "propagateClick": false,
 "arrowBeforeLabel": false,
 "bottom": "10%",
 "backgroundColorRatios": [
  0.09
 ],
 "borderSize": 0,
 "paddingLeft": 5,
 "popUpGap": 0,
 "popUpBackgroundColor": "#FFFFFF",
 "paddingRight": 5,
 "top": "10%",
 "class": "DropDown",
 "popUpBackgroundOpacity": 0.3,
 "selectedPopUpBackgroundColor": "#333333",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": 14,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "selectedPopUpFontColor": "#FFFFFF",
 "rollOverPopUpBackgroundColor": "#FFFFFF",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "popUpShadowBlurRadius": 6
},
{
 "iconURL": "skin/IconButton_307A9C91_297A_918C_41C3_CE13024B1C16.png",
 "id": "IconButton_307A9C91_297A_918C_41C3_CE13024B1C16",
 "minHeight": 1,
 "width": 48,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 96,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 42,
 "class": "IconButton",
 "click": "this.mainPlayList.set('selectedIndex', 1)",
 "maxHeight": 96,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "gallery button"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "height": "100%",
 "id": "component_3B06DDD8_297B_73BC_41C2_6D5F11C8806D",
 "layout": "horizontal",
 "minHeight": 20,
 "backgroundOpacity": 1,
 "children": [
  "this.HTMLText_38D48D38_2966_90FB_41B3_6932DA535AA4"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 20,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "TabPanelPage",
 "label": "Ranu Pani",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "ranu pani"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "component_3B06FDD8_297B_73BC_41B1_A5FD4879E4ED",
 "layout": "horizontal",
 "minHeight": 20,
 "backgroundOpacity": 1,
 "children": [
  "this.HTMLText_380E9605_296F_9095_41AD_B5F196FE1C97"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 20,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "TabPanelPage",
 "label": "Ranu Regulo",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "rabu regulo"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "component_3B062DD8_297B_73BC_41BB_0A8FBB1C6AB7",
 "layout": "horizontal",
 "minHeight": 20,
 "backgroundOpacity": 1,
 "children": [
  "this.WebFrame_3AA2016B_296A_909C_41A9_A63563018330"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 20,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "TabPanelPage",
 "label": "Maps",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "maps"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_38D48D38_2966_90FB_41B3_6932DA535AA4",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "paddingLeft": 20,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:37px;\"><B>Ranu Pani</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">Ranu Pani adalah objek wisata berupa danau di Desa Ranu Pani, Kecamatan Senduro, Kabupaten Lumajang, Jawa Timur. Ranu Pani adalah bagian dari Taman Nasional Bromo Tengger Semeru (TNBTS). Semula luas Ranu Pani berkisar satu hektare lebih, tetapi kini diperkirakan tinggal 0,75 hektare akibat laju sedimentasi yang cepat. Penduduk desa Ranu Pani berjumlah sekitar 2.000 orang</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">Sumber: Wikipedia</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "item1"
 },
 "paddingTop": 20
},
{
 "id": "HTMLText_380E9605_296F_9095_41AD_B5F196FE1C97",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "paddingLeft": 20,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:37px;\"><B>Ranu Regulo</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">Ranu Regulo adalah sebuah danau yang terbentuk secara alami dengan warna air biru kehijauan. Luas Ranu Regulo kurang dari satu hektar. Ranu Regulo dikelilingi pebukitan dan pepohonan hijau sehingga tampak cantik pada saat matahari terbit. Suhu rata-rata yaitu sekitar 10 derajat Celsius dan bisa turun hingga minus 4 derajat Celsius saat dini hari. Pengunjung disarankan untuk tidak berenang di Ranu Regulo dikarenakan suhu air terlalu dingin dan supaya air di danau tersebut tidak tercemar. Lokasi Ranu Regulo masih berada di kawasan Taman Nasional Bromo Tengger Semeru (TNBTS). Tepatnya di desa Ranu Pani Kecamatan Senduro Kabupaten Lumajang Provinsi Jawa Timur.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">Sumber: Wikipedia</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "item2"
 },
 "paddingTop": 20
},
{
 "id": "WebFrame_3AA2016B_296A_909C_41A9_A63563018330",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1975.4325439485433!2d112.9454532!3d-8.012846!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd639b1962b0a9d%3A0xde0fa53448ae9c9b!2sRanu%20Pani!5e0!3m2!1sen!2sid!4v1667138152180!5m2!1sen!2sid",
 "class": "WebFrame",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "data": {
  "name": "webframe"
 },
 "paddingTop": 0,
 "insetBorder": false,
 "height": "100%"
}],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Player",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "mouseWheelEnabled": true,
 "scripts": {
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getKey": function(key){  return window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "existsKey": function(key){  return key in window; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "registerKey": function(key, value){  window[key] = value; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "width": "100%",
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_398EFEDE_293F_71B4_41BB_675075858274",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
