{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 fetch('agenda.json')\
  .then(response => \{\
    if (!response.ok) throw new Error("No se pudo cargar la agenda");\
    return response.json();\
  \})\
  .then(data => \{\
    const tbody = document.querySelector("#agenda tbody");\
    data.forEach(item => \{\
      const row = document.createElement("tr");\
      row.innerHTML = `\
        <td>$\{item.hora\}</td>\
        <td>$\{item.actividad\}</td>\
        <td>$\{item.responsable\}</td>\
      `;\
      tbody.appendChild(row);\
    \});\
  \})\
  .catch(error => \{\
    document.querySelector("#agenda tbody").innerHTML = \
      `<tr><td colspan="3">Error al cargar la agenda</td></tr>`;\
    console.error(error);\
  \});}