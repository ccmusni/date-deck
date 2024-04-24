import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import CardFLip from './card/CardFlip';
import './custom-node.css';

const handleStyle = { left: 10 };

function CustomNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="custom-node">
      <CardFLip id={data.id} label={data.label} isFlipped={true} />
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default CustomNode;
