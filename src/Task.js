import './task.css'

export function TaskCard({ready}) {
    
  return (
    <div className='card'>
      <h1>Mi primer tarea</h1>
      <span style={!ready?{background:"red"}:{background:"green"}}>{ready? "Tarea realizada":"Tarea no realizada"}</span>
    </div>
  );
}
