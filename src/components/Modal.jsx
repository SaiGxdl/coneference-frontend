import React from "react";

export default function Modal({ open, onClose, children, title }) {
  if (!open) return null;
  return (
    <div style={{
      position:"fixed",inset:0,background:"rgba(2,6,23,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60
    }}>
      <div style={{background:"#fff",padding:18,borderRadius:10,maxWidth:700,width:"90%"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
          <strong>{title}</strong>
          <button onClick={onClose} className="btn" style={{background:"#ef4444"}}>Close</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
